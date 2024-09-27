'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Github, Mail, MapPin, User, Heart, Palette, Pizza, Tv, Music, Gamepad, MessageCircle } from "lucide-react"
export function PersonalIntroComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Name and Image */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Spooky Kipper</h1>
          <div className="w-48 h-48 mx-auto bg-gray-300 rounded-lg overflow-hidden">
            <img
              alt="Profile"
              className="w-full h-full object-cover"
              height="200"
              src="https://cdn.spooky.hk/avatars/2024_Named.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </div>

        {/* Introduction */}
        <p className="text-center text-lg">
          Hiya! I am Spooky Kipper. Nice to meet you.
          People usually mention me as Spooky online
        </p>

        {/* Interests */}
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>Student</Badge>
          <Badge>Roblox Development</Badge>
          <Badge>Web Development</Badge>
        </div>

        {/* Info */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Info</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              <span>Male</span>
            </div>
            <div className="flex items-center">
              <Heart className="mr-2 h-5 w-5" />
              <span>Personality: INTP-A</span>
            </div>
            <div className="flex items-center">
              <Palette className="mr-2 h-5 w-5" />
              <span>Favorite Color: Bright Indigo</span>
            </div>
            <div className="flex items-center">
              <Pizza className="mr-2 h-5 w-5" />
              <span>Favorite Food: Cup Noodle</span>
            </div>
            <div className="flex items-center">
              <Tv className="mr-2 h-5 w-5" />
              <span>Favorite Virtual Character: Azusawa Kohane</span>
            </div>
            <div className="flex items-center">
              <Music className="mr-2 h-5 w-5" />
              <span>Favorite Singer: Ava Max</span>
            </div>
            <div className="flex items-center">
              <Gamepad className="mr-2 h-5 w-5" />
              <span>Favorite Game: Project Sekai</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span>Discord: @spookykipper</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>Hong Kong SAR, China</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              <span>me@spooky.hk</span>
            </div>
          </CardContent>
        </Card>

        {/* Certificates */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Certificates and Awards</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Cisco: Introduction to Cybersecurity</CardTitle>
                <CardDescription>Sep 2024 • Awarded by Cisco Networking Academy </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <a href="https://certs.spooky.hk/Cisco_Introduction_to_Cybersecurity.pdf" target="_blank">
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    PDF Certificate
                  </Button>
                </a>
                <a href="https://www.credly.com/badges/9263df41-61bc-4bab-8d47-bcff290ae793/public_url" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify (Credly)
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Microsoft Office Specialist: PowerPoint Associate (Office 2019)</CardTitle>
                <CardDescription>Apr 2024 • Awarded by Microsoft / Certiport </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
              <a href="https://certs.spooky.hk/MO300.pdf" target="_blank">
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    PDF Certificate
                  </Button>
                </a>
              <a href="https://www.credly.com/badges/41226b5f-5c5f-4558-a8d7-22b924465c86/public_url" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify (Credly)
                  </Button>
                </a>
                <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify (Certiport, v43x-DwoP)
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    alt="Project Logo"
                    className="w-full h-full object-cover"
                    height="64"
                    src="/placeholder.svg?height=64&width=64"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                </div>
                <CardTitle>AI Chat Bot</CardTitle>
              </CardHeader>
              <CardContent>
                <p>An intelligent chatbot powered by GPT-3, capable of engaging in human-like conversations.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    alt="Project Logo"
                    className="w-full h-full object-cover"
                    height="64"
                    src="/placeholder.svg?height=64&width=64"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                </div>
                <CardTitle>Data Visualization Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Interactive dashboard for visualizing complex datasets using D3.js and React.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}