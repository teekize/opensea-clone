import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'wdix7iuj',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk8ms7JXNPUGw6SeA5aQoVyMHnnnQEZIEopPxBRda2r3Yxk7WuViFCfxDTJihv9vfzTAJZ4FlicjhY8gnWy3jDyNMhOyV7Ad0SGWc3uSYq1DXxo0uxiH9vE4xz7yeyNWJJqVYn8s34XMTtA6G72tY0sjvn4C39VS6rcZb0h9MJ34XthaBPcr',
  useCdn: false,
})