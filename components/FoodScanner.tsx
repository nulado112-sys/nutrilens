'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Camera, Upload, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

interface AnalysisResult {
  food_name: string
  confidence: number
  serving_size: string
  calories: number
  macros: {
    protein_g: number
    carbs_g: number
    fat_g: number
    fiber_g: number
    sugar_g: number
  }
  health_score: number
  tips: string[]
  warnings: string[]
}

export default function FoodScanner() {
  const [image, setImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (file: File) => {
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file.')
      return
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      setError('Image file is too large. Please choose a smaller image.')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setImage(e.target?.result as string)
      setResult(null)
      setError(null)
    }
    reader.onerror = () => {
      setError('Failed to read the image file. Please try again.')
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    handleFileSelect(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const analyzeImage = async () => {
    if (!image) return

    setIsAnalyzing(true)
    setError(null)

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: image.split(',')[1], // Remove data:image/jpeg;base64, prefix
        }),
      })

      if (!response.ok) {
        throw new Error('Analysis failed')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError('Failed to analyze image. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const resetScanner = () => {
    setImage(null)
    setResult(null)
    setError(null)
  }

  return (
    <section id="analyzer" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl font-bold text-nutrilens-text mb-4">
            Food Scanner
          </h2>
          <p className="text-nutrilens-muted">
            Upload a photo or take a picture of your meal
          </p>
          <p className="text-sm text-nutrilens-muted/70 mt-2">
            📱 On mobile: Allow camera access when prompted
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-nutrilens-soft rounded-2xl p-8"
        >
          {!image ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="border-2 border-dashed border-nutrilens-accent/30 rounded-2xl p-12 text-center hover:border-nutrilens-accent/50 transition-colors"
            >
              <Upload className="h-16 w-16 text-nutrilens-accent mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-nutrilens-text mb-2">
                Drop your food photo here
              </h3>
              <p className="text-nutrilens-muted mb-6">
                Or choose from your device
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center gap-2 rounded-full bg-nutrilens-accent px-6 py-3 text-white hover:bg-nutrilens-accent/90 transition-colors"
                >
                  <Upload className="h-5 w-5" />
                  Upload Photo
                </button>
                <button
                  onClick={() => cameraInputRef.current?.click()}
                  className="flex items-center justify-center gap-2 rounded-full border border-nutrilens-accent px-6 py-3 text-nutrilens-accent hover:bg-nutrilens-accent hover:text-white transition-colors"
                >
                  <Camera className="h-5 w-5" />
                  Take Photo
                </button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e.target.files?.[0]!)}
                className="hidden"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture
                onChange={(e) => handleFileSelect(e.target.files?.[0]!)}
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-center">
                <img
                  src={image}
                  alt="Food to analyze"
                  className="max-w-full max-h-64 rounded-2xl object-cover"
                />
              </div>

              {!result && !isAnalyzing && (
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={analyzeImage}
                    className="flex items-center justify-center gap-2 rounded-full bg-nutrilens-accent px-8 py-3 text-white hover:bg-nutrilens-accent/90 transition-colors"
                  >
                    Analyze Food
                  </button>
                  <button
                    onClick={resetScanner}
                    className="rounded-full border border-nutrilens-muted px-6 py-3 text-nutrilens-muted hover:bg-nutrilens-muted hover:text-white transition-colors"
                  >
                    Try Another
                  </button>
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-nutrilens-accent mx-auto mb-4" />
                  <p className="text-nutrilens-muted">Analyzing your food...</p>
                </div>
              )}

              {error && (
                <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 rounded-2xl p-4">
                  <AlertCircle className="h-5 w-5" />
                  {error}
                </div>
              )}

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-bold text-nutrilens-text mb-2">
                      {result.food_name}
                    </h3>
                    <p className="text-nutrilens-muted">
                      {result.confidence}% confidence • {result.serving_size}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-nutrilens-accent mb-2">
                        {result.calories}
                      </div>
                      <div className="text-nutrilens-muted">calories</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-nutrilens-muted">Protein</span>
                        <span className="font-medium">{result.macros.protein_g}g</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div
                          className="bg-nutrilens-accent h-2 rounded-full"
                          style={{ width: `${Math.min((result.macros.protein_g / 50) * 100, 100)}%` }}
                        ></div>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm text-nutrilens-muted">Carbs</span>
                        <span className="font-medium">{result.macros.carbs_g}g</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div
                          className="bg-nutrilens-accent h-2 rounded-full"
                          style={{ width: `${Math.min((result.macros.carbs_g / 100) * 100, 100)}%` }}
                        ></div>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm text-nutrilens-muted">Fat</span>
                        <span className="font-medium">{result.macros.fat_g}g</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div
                          className="bg-nutrilens-accent h-2 rounded-full"
                          style={{ width: `${Math.min((result.macros.fat_g / 30) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-nutrilens-text">Health Score: {result.health_score}/10</span>
                    </div>

                    <div className="space-y-2">
                      {result.tips.map((tip, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-nutrilens-accent mt-1">•</span>
                          <span className="text-sm text-nutrilens-muted">{tip}</span>
                        </div>
                      ))}
                    </div>

                    {result.warnings.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-nutrilens-soft">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="h-4 w-4 text-yellow-600" />
                          <span className="text-sm font-medium text-yellow-800">Notes</span>
                        </div>
                        {result.warnings.map((warning, index) => (
                          <div key={index} className="text-sm text-yellow-700">{warning}</div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 justify-center">
                    <button className="rounded-full bg-nutrilens-accent px-6 py-3 text-white hover:bg-nutrilens-accent/90 transition-colors">
                      Save to Journal
                    </button>
                    <button
                      onClick={resetScanner}
                      className="rounded-full border border-nutrilens-muted px-6 py-3 text-nutrilens-muted hover:bg-nutrilens-muted hover:text-white transition-colors"
                    >
                      Analyze Another
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}