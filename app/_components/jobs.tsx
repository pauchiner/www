import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui';

export const Jobs = () => (
  <section id="jobs">
    <h3 className="text-lg scroll-m-20 underline underline-offset-4 leading-7 [&:not(:first-child)]:mt-2">
      <a href="/#jobs">JOBS</a>
    </h3>
    <div className="flex flex-col gap-4 mt-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-sm sm:text-md">
            Digital Value
            <span className="font-normal text-muted-foreground text-xs sm:text-sm">
              2025 - <span className="underline text-medium">NOW</span>
            </span>
          </CardTitle>
          <CardDescription>Full Stack developer</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-sm sm:text-md">
            Iberdrola Nuclear Plant
            <span className="font-normal text-muted-foreground text-xs sm:text-sm">
              OCT 2023
            </span>
          </CardTitle>
          <CardDescription>Technical Assitant</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-sm sm:text-md">
            Miguel Ballesteros Viana
            <span className="font-normal text-muted-foreground text-xs sm:text-sm">
              2022 - 2023
            </span>
          </CardTitle>
          <CardDescription>Mobile Developer</CardDescription>
        </CardHeader>
      </Card>
    </div>
  </section>
);
