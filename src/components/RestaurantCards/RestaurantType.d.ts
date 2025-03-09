interface SLA {
  deliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}

interface Badge {
  imageId: string;
  description: string;
}

interface Availability {
  nextCloseTime: string;
  opened: boolean;
}

interface ExternalRatings {
  aggregatedRating: {
    rating: string;
    ratingCount?: string;
  };
  source?: string;
  sourceIconImageId?: string;
}

interface BadgeObject {
  attributes: {
    description: string;
    imageId: string;
  };
}

interface Info {
  id: string;
  name: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: SLA;
  availability: Availability;
  badges: {
    imageBadges?: Badge[] | undefined;
  };
  isOpen: boolean;
  externalRatings: ExternalRatings;
  ratingsDisplayPreference: string;
}

interface CTA {
  link: string;
  text: string;
  type: string;
}

interface Analytics {
  context?: string;
}

export type Restaurant = {
  cards: any;
  info: Info;
  analytics: Analytics;
  cta: CTA;
  widgetId: string;
};
