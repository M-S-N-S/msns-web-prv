import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "~/components/ui/card";

export default function AdminProfile() {
    return (
        <main className="min-h-screen sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 bg-yellow-100/50">
        <h1 className="text-3xl font-bold text-green-800 p-4">Admin Profile</h1>
        
         <Card
            className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
          >
            <CardHeader className="pb-3">
              <CardTitle>Preferences</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Orders Dashboard for Seamless
                Management and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Profile Settings</Button>
            </CardFooter>
          </Card>
    </main>
    )
}