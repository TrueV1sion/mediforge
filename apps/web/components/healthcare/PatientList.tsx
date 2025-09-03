'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface Patient {
  id: string
  mrn: string
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  status: string
  lastVisit: string
}

export function PatientList() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading patients
    setTimeout(() => {
      setPatients([
        {
          id: '1',
          mrn: 'MRN001234',
          firstName: 'John',
          lastName: 'Doe',
          dateOfBirth: '1980-05-15',
          gender: 'Male',
          status: 'Active',
          lastVisit: '2024-01-15'
        },
        {
          id: '2',
          mrn: 'MRN001235',
          firstName: 'Jane',
          lastName: 'Smith',
          dateOfBirth: '1975-08-22',
          gender: 'Female',
          status: 'Active',
          lastVisit: '2024-01-10'
        },
        {
          id: '3',
          mrn: 'MRN001236',
          firstName: 'Robert',
          lastName: 'Johnson',
          dateOfBirth: '1990-03-10',
          gender: 'Male',
          status: 'Active',
          lastVisit: '2024-01-08'
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate)
    const today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Patient List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Patient List</CardTitle>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Add New Patient
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">
                    {patient.firstName} {patient.lastName}
                  </h3>
                  <div className="text-sm text-gray-600 mt-1">
                    <span className="mr-4">MRN: {patient.mrn}</span>
                    <span className="mr-4">Age: {calculateAge(patient.dateOfBirth)}</span>
                    <span className="mr-4">Gender: {patient.gender}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}
                  </div>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {patient.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
          <span>Showing {patients.length} patients</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}