import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Github, Mail, MapPin, User, Heart, Palette, Pizza, Tv, Music, Gamepad, MessageCircle } from "lucide-react"

export default function PersonalIntro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Name and Image */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">John Doe</h1>
          <div className="w-48 h-48 mx-auto bg-gray-300 rounded-lg overflow-hidden">
            <img
              alt="Profile"
              className="w-full h-full object-cover"
              height="200"
              src="/placeholder.svg?height=200&width=200"
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
          Passionate developer with a keen interest in AI and machine learning. Always eager to learn and create innovative solutions.
        </p>

        {/* Interests */}
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>AI</Badge>
          <Badge>Machine Learning</Badge>
          <Badge>Web Development</Badge>
          <Badge>Data Science</Badge>
          <Badge>Open Source</Badge>
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
              <span>Personality: INTJ</span>
            </div>
            <div className="flex items-center">
              <Palette className="mr-2 h-5 w-5" />
              <span>Favorite Color: Blue</span>
            </div>
            <div className="flex items-center">
              <Pizza className="mr-2 h-5 w-5" />
              <span>Favorite Food: Sushi</span>
            </div>
            <div className="flex items-center">
              <Tv className="mr-2 h-5 w-5" />
              <span>Favorite Anime: Attack on Titan</span>
            </div>
            <div className="flex items-center">
              <Music className="mr-2 h-5 w-5" />
              <span>Favorite Singer: Ed Sheeran</span>
            </div>
            <div className="flex items-center">
              <Gamepad className="mr-2 h-5 w-5" />
              <span>Favorite Game: The Legend of Zelda</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              <span>Discord: johndoe#1234</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>United States</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              <span>john.doe@example.com</span>
            </div>
          </CardContent>
        </Card>

        {/* Certificates */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning Specialization</CardTitle>
                <CardDescription>Issued by Coursera | June 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Comprehensive course covering fundamental ML algorithms and their applications.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Verify
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Web Development Bootcamp</CardTitle>
                <CardDescription>Issued by Udemy | September 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Intensive program covering full-stack web development with modern technologies.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Verify
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
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