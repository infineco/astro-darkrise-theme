import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const aboutBannerSection = defineCollection({
  loader: glob({
    pattern: "about-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

export const ctaSection1 = defineCollection({
  loader: glob({
    pattern: "call-to-action-1.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    image: z.string(),
    bg_image: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

export const ctaSection2 = defineCollection({
  loader: glob({
    pattern: "call-to-action-2.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    bg_image: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    list: z.array(
      z.object({
        image: z.string().optional(),
        icon: z.string().optional(),
      }),
    ),
  }),
});

export const ctaCareerSection = defineCollection({
  loader: glob({
    pattern: "career-cta.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    button: z.object({
      label: z.string(),
      link: z.string(),
    }),
  }),
});

export const changelogSection = defineCollection({
  loader: glob({
    pattern: "changelog.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        date: z.string(),
        version: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

export const customersLogoSection = defineCollection({
  loader: glob({
    pattern: "customers-logo.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    list: z.array(z.string()),
  }),
});

export const featuresCardLayoutSection = defineCollection({
  loader: glob({
    pattern: "features-card-layout.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const featuresGridSection = defineCollection({
  loader: glob({
    pattern: "features-grid.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        images: z.array(z.string()).optional(),
        tools_bg: z.string().optional(),
        tools: z.array(z.string()).optional(),
      }),
    ),
  }),
});

export const featuresSections = defineCollection({
  loader: glob({
    pattern: "features.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      images: z.array(z.string()),
      list: z.array(z.string()),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
  ),
});

export const homeBannerSection = defineCollection({
  loader: glob({
    pattern: "home-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    note: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    buttons: z.array(
      z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    ),
    list: z.array(z.string()),
  }),
});

export const integrationSection = defineCollection({
  loader: glob({
    pattern: "integration.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

export const ourTeamSection = defineCollection({
  loader: glob({
    pattern: "our-team.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        name: z.string(),
        avatar: z.string(),
        content: z.string(),
        designation: z.string(),
        social: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            url: z.string(),
          }),
        ),
      }),
    ),
  }),
});

export const pricingCompareSection = defineCollection({
  loader: glob({
    pattern: "pricing-compare.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    plans: z.array(
      z.object({
        title: z.string(),
        price: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
    plans_features: z.array(
      z.object({
        group: z.string(),
        list: z.array(
          z.object({
            value: z.string(),
            basic: z.union([z.boolean(), z.any()]),
            standard: z.union([z.boolean(), z.any()]),
            pro: z.union([z.boolean(), z.any()]),
          }),
        ),
      }),
    ),
  }),
});

export const pricingSection = defineCollection({
  loader: glob({
    pattern: "pricing.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    discount: z.string(),
    plans_labels: z.array(z.string()),
    plans: z.array(
      z.object({
        title: z.string(),
        active: z.boolean(),
        description: z.string(),
        price_prefix: z.string(),
        price_monthly: z.string(),
        price_yearly: z.string(),
        price_description_monthly: z.string(),
        price_description_yearly: z.string(),
        features: z.array(z.string()),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
  }),
});

export const testimonialSection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    list: z.array(
      z.object({
        title: z.string(),
        featured: z.boolean(),
        content: z.string(),
        customer: z.object({
          avatar: z.string(),
          name: z.string(),
          designation: z.string(),
        }),
        list: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          )
          .optional(),
      }),
    ),
  }),
});

export const valuesSection = defineCollection({
  loader: glob({
    pattern: "values.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});
