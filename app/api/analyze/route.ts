import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json()

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    // Use Google Cloud Vision API for OCR to detect food name
    const visionResponse = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requests: [
            {
              image: { content: image },
              features: [
                { type: 'LABEL_DETECTION', maxResults: 10 },
                { type: 'TEXT_DETECTION', maxResults: 5 }
              ]
            }
          ]
        })
      }
    )

    const visionData = await visionResponse.json()

    // Extract food labels
    let foodName = 'Unknown Food'
    const labels = visionData.responses?.[0]?.labelAnnotations || []
    const texts = visionData.responses?.[0]?.textAnnotations || []

    // Try to find food name from text first
    if (texts.length > 0) {
      foodName = texts[0].description.split('\n')[0].trim()
    } else if (labels.length > 0) {
      foodName = labels[0].description
    }

    // Use Edamam Nutrition Analysis API
    const edamamAppId = '3517c892' // Free tier
    const edamamAppKey = '3e1c6a34b09c558cdcd694db2e4c4673' // Free tier

    const nutritionResponse = await fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=${edamamAppId}&app_key=${edamamAppKey}&ingr=${encodeURIComponent(foodName)}`
    )

    const nutritionData = await nutritionResponse.json()

    // Build response
    const analysisResult = {
      food_name: foodName,
      confidence: labels.length > 0 ? Math.round(labels[0].score * 100) : 75,
      serving_size: '100g',
      calories: Math.round(nutritionData.calories || 0),
      macros: {
        protein_g: Math.round(nutritionData.totalNutrients?.PROCNT?.quantity || 0),
        carbs_g: Math.round(nutritionData.totalNutrients?.CHOCDF?.quantity || 0),
        fat_g: Math.round(nutritionData.totalNutrients?.FAT?.quantity || 0),
        fiber_g: Math.round(nutritionData.totalNutrients?.FIBTG?.quantity || 0),
        sugar_g: Math.round(nutritionData.totalNutrients?.SUGAR?.quantity || 0)
      },
      health_score: nutritionData.healthLabels?.length > 5 ? 8 : 6,
      tips: [
        'Enjoy in moderation',
        'Balance with whole foods',
        'Stay hydrated'
      ],
      warnings: nutritionData.totalNutrients?.SUGAR?.quantity > 20
        ? ['High in sugar']
        : []
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
