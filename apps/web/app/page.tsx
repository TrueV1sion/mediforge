'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Hospital, 
  Shield, 
  Code, 
  Zap, 
  Building2,
  Pill,
  TestTube,
  Heart,
  FileText,
  Lock,
  CheckCircle,
  ArrowRight,
  Github,
  Book,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const healthcareSegments = [
  {
    id: 'provider',
    name: 'Healthcare Provider',
    icon: Hospital,
    description: 'EHR, Practice Management, Telemedicine',
    features: ['Patient Records', 'Clinical Documentation', 'E-Prescribing', 'Appointment Scheduling'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'payer',
    name: 'Insurance Payer',
    icon: Building2,
    description: 'Claims Processing, Member Portals, Prior Auth',
    features: ['Claims Management', 'Member Portal', 'Benefits Verification', 'Provider Network'],
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    icon: Pill,
    description: 'Dispensing, E-Prescribing, Inventory',
    features: ['Prescription Management', 'Drug Interactions', 'Inventory Tracking', 'PBM Integration'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'laboratory',
    name: 'Laboratory',
    icon: TestTube,
    description: 'LIS, Specimen Tracking, Results',
    features: ['Specimen Management', 'Test Results', 'LOINC Coding', 'Quality Control'],
    color: 'from-purple-500 to-pink-600'
  }
]

const complianceFeatures = [
  { name: 'HIPAA Compliant', icon: Shield, description: 'Full HIPAA Privacy and Security Rules compliance' },
  { name: 'PHI Encryption', icon: Lock, description: 'AES-256 encryption for all protected health information' },
  { name: 'Audit Logging', icon: FileText, description: 'Immutable audit trail for all data access' },
  { name: 'FHIR Native', icon: Heart, description: 'Built on FHIR R4 with US Core profiles' }
]

export default function Home() {
  const [selectedSegment, setSelectedSegment] = useState('provider')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Navigate to generator page
    window.location.href = '/generator'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                MediForge
              </h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition">
                <Book className="h-5 w-5 inline mr-1" />
                Docs
              </Link>
              <Link href="/templates" className="text-gray-600 hover:text-gray-900 transition">
                Templates
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-gray-900 transition">
                <Users className="h-5 w-5 inline mr-1" />
                Community
              </Link>
              <Link href="https://github.com/TrueV1sion/mediforge" target="_blank">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 opacity-70" />
        <div className="container relative mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4" variant="secondary">
              <Shield className="h-3 w-3 mr-1" />
              HIPAA Compliant • FHIR Native • Enterprise Ready
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Build Healthcare Apps with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Generate production-ready, HIPAA-compliant healthcare applications in minutes.
              Powered by Claude AI and built on modern healthcare standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                {isGenerating ? 'Starting Generator...' : 'Start Building'}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">
                  Watch Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Segments */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Healthcare Segment</h2>
          <p className="text-gray-600">Specialized templates for every healthcare vertical</p>
        </div>
        
        <Tabs value={selectedSegment} onValueChange={setSelectedSegment} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {healthcareSegments.map((segment) => (
              <TabsTrigger key={segment.id} value={segment.id} className="flex items-center gap-2">
                <segment.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{segment.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {healthcareSegments.map((segment) => (
            <TabsContent key={segment.id} value={segment.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${segment.color}`} />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <segment.icon className="h-6 w-6" />
                      {segment.name} Solutions
                    </CardTitle>
                    <CardDescription>{segment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {segment.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button className={`bg-gradient-to-r ${segment.color} text-white`}>
                        <Code className="h-4 w-4 mr-2" />
                        Generate {segment.name} App
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Compliance Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security & Compliance</h2>
            <p className="text-gray-600">Built for healthcare from the ground up</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-purple-600 mb-3" />
                    <CardTitle className="text-lg">{feature.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Healthcare</h2>
          <p className="text-gray-600">Everything you need to build compliant healthcare applications</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-yellow-500 mb-3" />
              <CardTitle>AI-Powered Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Describe your healthcare app in plain English and watch as MediForge generates 
                production-ready code with Claude AI.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-green-500 mb-3" />
              <CardTitle>Built-in Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Automatic HIPAA compliance, audit logging, PHI encryption, and security best 
                practices built into every generated app.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Code className="h-10 w-10 text-blue-500 mb-3" />
              <CardTitle>Modern Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Next.js, FastAPI, PostgreSQL, and FHIR R4. Deploy to Vercel with one click 
                and scale to millions of users.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Healthcare Application?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers building the future of healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={handleGenerate}>
              <Sparkles className="h-5 w-5 mr-2" />
              Start Generating
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Book className="h-5 w-5 mr-2" />
              Read Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-purple-400" />
                <span className="text-white font-bold">MediForge</span>
              </div>
              <p className="text-sm">
                AI-powered healthcare application generator. Built with love for the healthcare community.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="/templates" className="hover:text-white transition">Templates</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/roadmap" className="hover:text-white transition">Roadmap</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="hover:text-white transition">Documentation</Link></li>
                <li><Link href="/api" className="hover:text-white transition">API Reference</Link></li>
                <li><Link href="/guides" className="hover:text-white transition">Guides</Link></li>
                <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/hipaa" className="hover:text-white transition">HIPAA Compliance</Link></li>
                <li><Link href="/security" className="hover:text-white transition">Security</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 MediForge. All rights reserved. Built on the Laudable foundation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}