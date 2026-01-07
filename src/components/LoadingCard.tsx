import { Card, CardContent } from "@/components/ui/card";

interface CardDemoProps {
  image: string;
  title: string;
  description: string;
  publishedAt?: string;
  readTime?: string;
}

export function LoadCardDemo({
  image,
  title,
  description,
  publishedAt,
  readTime,
}: CardDemoProps) {

  return (
    <Card
      className="w-full overflow-hidden rounded-1 pt-0 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-101 hover:cursor-pointer"
    >
      {/* Image at the top */}
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      {/* Content */}
      <CardContent className="pt-0">
        {/* Published date & read time */}
        {(publishedAt || readTime) && (
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            {publishedAt && <span>{publishedAt}</span>}
            {publishedAt && readTime && <span>•</span>}
            {readTime && <span>{readTime}</span>}
          </div>
        )}

        <h2 className="text-2xl font-bold leading-tight text-left text-[#013366]">{title}</h2>
        <p className="mt-2 text-m text-muted-foreground text-left">{description}</p>
      </CardContent>
    </Card>
  );
}
