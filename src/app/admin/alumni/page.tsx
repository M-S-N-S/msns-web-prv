import { Progress } from "@radix-ui/react-progress";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "~/components/ui/card";

export default function Alumni (){
    return(
      <main className="min-h-screen sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 bg-yellow-100/50">
            <h1 className="text-3xl font-bold text-green-800 p-4">MSNS-Alumni</h1>
             <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Alumni</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Faculty Management</Button>
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>Total Students</CardDescription>
                  <CardTitle className="text-4xl">1,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +25% from this month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={25} aria-label="25% increase" />
                </CardFooter>
              </Card>
              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>This Month</CardDescription>
                  <CardTitle className="text-4xl">$15,329</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    +10% from last month
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress value={12} aria-label="12% increase" />
                </CardFooter>
              </Card>
        </main>
    )
}