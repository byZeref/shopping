import type { Product } from "#shared/types"
import { useSupabase } from "~~/server/utils/supabase";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // Only allow specified methods, (for generic file extension ('all.ts' not 'all.get.ts'))
  // assertMethod(event, ['GET'])
  // Get the route params
  // const { chapterSlug, lessonSlug } = event.context.params

  const products = await prisma.product.findMany()
  const { supabase } = await useSupabase(event)

  // const { data: imageUrl } = supabase
  //   .storage
  //   .from('images')
  //   .getPublicUrl('products/creatina-02.webp')
  //
  // console.log('image', imageUrl)

  if (!products) {
    throw createError({
      statusCode: 404,
      statusMessage: "No product found",
    })
  }

  // products.forEach((prod: Product) => {
  //   if (!prod.image) return
  //   const { data } = supabase.storage.from('products').getPublicUrl(prod.image)
  //   prod.imageUrl = data.publicUrl
  // })

  return products

})