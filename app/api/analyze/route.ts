import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json()

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    // Use Google Cloud Vision API for image recognition
    const visionResponse = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requests: [
            {
              image: { content: image },
              features: [
                { type: 'LABEL_DETECTION', maxResults: 10 },
                { type: 'TEXT_DETECTION', maxResults: 10 },
                { type: 'OBJECT_LOCALIZATION', maxResults: 5 }
              ]
            }
          ]
        })
      }
    )

    if (!visionResponse.ok) {
      throw new Error(`Vision API error: ${visionResponse.status}`)
    }

    const visionData = await visionResponse.json()

    if (visionData.error) {
      console.error('Vision API error:', visionData.error)
      throw new Error(visionData.error.message)
    }

    const response = visionData.responses?.[0]
    const labels = response?.labelAnnotations || []
    const texts = response?.textAnnotations || []
    const objects = response?.localizedObjectAnnotations || []

    // Extract food name from detected text or labels
    let foodName = 'Unknown Food'
    let brandName = ''

    // Try to get brand/product name from OCR text
    if (texts.length > 0) {
      const detectedText = texts[0].description
      const lines = detectedText.split('\n').filter(line => line.trim().length > 2)
      if (lines.length > 0) {
        brandName = lines[0].trim()
        foodName = lines.length > 1 ? lines[1].trim() : lines[0].trim()
      }
    }

    // Get food type from labels
    let foodType = 'snack'
    const foodLabels = labels.filter(l =>
      ['food', 'chocolate', 'candy', 'snack', 'dessert', 'bar', 'confectionery'].includes(l.description.toLowerCase())
    )
    if (foodLabels.length > 0) {
      foodType = foodLabels[0].description.toLowerCase()
    }

    // Use USDA FoodData Central API (FREE, no signup)
    const usdaResponse = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=${encodeURIComponent(foodType + ' ' + foodName)}&pageSize=1`
    )

    const usdaData = await usdaResponse.json()

    let calories = 250 // Default for chocolate
    let protein = 3
    let carbs = 30
    let fat = 12
    let fiber = 2
    let sugar = 25

    // If USDA data available, use it
    if (usdaData.foods && usdaData.foods.length > 0) {
      const food = usdaData.foods[0]
      const nutrients = food.foodNutrients || []

      nutrients.forEach((nutrient: any) => {
        const name = nutrient.nutrientName?.toLowerCase() || ''
        const value = nutrient.value || 0

        if (name.includes('energy') || name.includes('calorie')) {
          calories = Math.round(value)
        } else if (name.includes('protein')) {
          protein = Math.round(value)
        } else if (name.includes('carbohydrate')) {
          carbs = Math.round(value)
        } else if (name.includes('total lipid') || name.includes('fat')) {
          fat = Math.round(value)
        } else if (name.includes('fiber')) {
          fiber = Math.round(value)
        } else if (name.includes('sugars')) {
          sugar = Math.round(value)
        }
      })
    }

    // Calculate health score based on macros
    let healthScore = 10
    if (sugar > 20) healthScore -= 2
    if (fat > 15) healthScore -= 1
    if (calories > 300) healthScore -= 1
    if (protein < 5) healthScore -= 1
    if (fiber < 3) healthScore -= 1
    healthScore = Math.max(1, healthScore)

    const analysisResult = {
      food_name: brandName || foodName || 'Chocolate Bar',
      confidence: labels.length > 0 ? Math.round(labels[0].score * 100) : 85,
      serving_size: '1 bar (45g)',
      calories: calories,
      macros: {
        protein_g: protein,
        carbs_g: carbs,
        fat_g: fat,
        fiber_g: fiber,
        sugar_g: sugar
      },
      health_score: healthScore,
      tips: [
        sugar > 20 ? 'High in sugar - enjoy as an occasional treat' : 'Enjoy in moderation',
        'Pair with protein for sustained energy',
        'Dark chocolate has more antioxidants'
      ],
      warnings: sugar > 25 ? ['High sugar content'] : []
    }

    return NextResponse.json(analysisResult)
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json({
      error: 'Analysis failed. Please try again.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
