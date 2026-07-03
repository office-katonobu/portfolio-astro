import rss from "@astrojs/rss"

import { getProjects } from "@utils/getContent"
import { getBlog } from "@utils/getContent"
import { config } from "@parseConfig"

export async function GET(context) {
  const projects = await getProjects()
  const blogPosts = await getBlog()

  const project_item = projects.map((project) => ({
    title: project.data.title,
    description: project.data.description,
    link: project.id,
    pubDate: project.data.date,
  }))

  const blog_item = blogPosts.map((blog) => ({
    title: blog.data.title,
    description: blog.data.description,
    link: blog.id,
    pubDate: blog.data.date,
  }))

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: context.site,
    items: [...project_item, ...blog_item],
    customData: `<language>${config.site.locale}</language>`,
  })
}
