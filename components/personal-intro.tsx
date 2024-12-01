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
          Hiya! I am Spooky Kipper. Nice to meet you.<br/>
          People usually mention me as Spooky online, Kipper in real life.
        </p>

        {/* Interests */}
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>Student</Badge>
          <Badge>Roblox Development</Badge>
          <Badge>Web Development</Badge>
          <Badge>Kubuntu Linux</Badge>
        </div>

        {/* Info */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Info</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              <span>Gender: Male</span>
            </div>
            <div className="flex items-center">
              <Heart className="mr-2 h-5 w-5" />
              <span>Personality: ISTP Virtuoso</span>
            </div>
            <div className="flex items-center">
              <Palette className="mr-2 h-5 w-5" />
              <span>Favorite Color: Bright Indigo</span>
            </div>
            <div className="flex items-center">
              <Pizza className="mr-2 h-5 w-5" />
              <span>Favorite Food: Chocolate</span>
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


        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    alt="Project Logo"
                    className="w-full h-full object-cover"
                    height="64"
                    src="https://cdn.spooky.hk/projectIcons/TabIslands.png"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                </div>
                <CardTitle>Contextual Tab Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Chrome Extension: Group tabs by context for you automatically. Inspired by Opera One.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <a href="https://chromewebstore.google.com/detail/tab-islands-for-chrome/bnkppmpbnnedcfoncmkbekokhmfkhoin" target="_blank">
                <Button size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Chrome Web Store
                </Button>
                </a>
                <a href="https://github.com/SpookyKipper/TabIslandsForChrome/" target="_blank">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code (GitHub)
                </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    alt="Project Logo"
                    className="w-full h-full object-cover"
                    height="64"
                    src="https://cdn.spooky.hk/projectIcons/HKBus.webp"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                </div>
                <CardTitle>HKBus</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discord Bot: Check Hong Kong Bus Routes and their Estimated Time of
                Arrivals.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
              <a href="https://top.gg/bot/818372729761038406" target="_blank">
                <Button size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More (Top.gg)
                </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    alt="Project Logo"
                    className="w-full h-full object-cover"
                    height="64"
                    src="https://cdn.spooky.hk/projectIcons/spookhost.png"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                </div>
                <CardTitle>Spookhost</CardTitle>
              </CardHeader>
              <CardContent>
                <p>An ad-free Free Website Hosting service. With easy-to-use Client Portal and Control Panel.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
              <a href="https://spookhost.xyz/" target="_blank">
                <Button size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-16 h-16 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    alt="Project Logo"
                    className="w-full h-full object-cover"
                    height="64"
                    src="https://cdn.spooky.hk/projectIcons/ListCraft.png"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                </div>
                <CardTitle>ListCraft</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A Free Minecraft Server list allowing server owners to monitor and advertise their servers.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
              <a href="https://listcraft.top/" target="_blank">
                <Button size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        
        {/* Certificates */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Certifications and Awards</h2>
          <div className="space-y-4">
          <Card className={"cert-card lionRockAvi"}>
              <CardHeader>
                <CardTitle>Aviation Taster Programme</CardTitle>
                <CardDescription>Nov 2024 • Achievement • Issued by Lion Rock Aviation </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Completing the Aviation Taster Programme organized by Lion Rock Aviation with excellence.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <a href="https://certs.spooky.hk/AviationTasterProgramme.pdf" target="_blank">
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    PDF Certificate
                  </Button>
                </a>
                <a href="https://www.lionrockaviation.net/" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Lion Rock Aviation
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card className={"cert-card msMO300"}>
              <CardHeader>
                <CardTitle>Microsoft Office Specialist: PowerPoint Associate (Office 2019)</CardTitle>
                <CardDescription>Apr 2024 • Silver Award • Issued by Microsoft / Certiport </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Passed the MO-300 exam from Microsoft under supervision by Certiport.<hr/>The earner have a fundamental understanding of the PowerPoint environment and demonstrate the correct application of PowerPoint.</p>
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


        {/* Course Completions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Course Completions</h2>
          <div className="space-y-4">
          <Card className={"cert-card ciscoPcHardwareBasics"}>
              <CardHeader>
                <CardTitle>Cisco: Computer Hardware Basics</CardTitle>
                <CardDescription>Oct 2024 • Course Completion • Issued by Cisco Networking Academy </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Completed the Computer Hardware Basics course and passed the exam from Cisco Networking Academy.
                  <hr/>
                  The earner has fundamentals knowledge of computers and mobile devices, how they work, as well as the basic concepts and skills needed to install components to build, repair, upgrade personal computers and and basic troubleshooting tools and techniques.</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <a href="https://certs.spooky.hk/Cisco_Computer_Hardware_Basics.pdf" target="_blank">
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    PDF Certificate
                  </Button>
                </a>
                <a href="https://www.credly.com/badges/1c51b0e9-451a-4ce2-861d-29fe04f8295e/public_url" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify (Credly)
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card className={"cert-card ciscoCyberSec"}>
              <CardHeader>
                <CardTitle>Cisco: Introduction to Cybersecurity</CardTitle>
                <CardDescription>Sep 2024 • Course Completion • Issued by Cisco Networking Academy </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Completed the Introduction to Cybersecurity course and passed the exam from Cisco Networking Academy.
                  <hr/>
                  The holder of this student-level credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession.</p>
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
          
          </div>
        </section>


        <p style={{marginTop: "12.5px"}}>&copy; Spooky Kipper • spooky.hk • Explore the old site <a href="https://v1.spooky.hk" target="_blank" style={{textDecoration: "underline"}}>here</a> (not updated)</p><hr style={{borderColor: "darkgray", marginTop: "12.5px"}}/>
      </div>
    </div>
  )
}
