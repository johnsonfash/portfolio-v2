export const testimonials = [
  {
    image: '/rand.jpg',
    name: 'Sarah Thompson',
    star: 5,
    comment: 'Working with TDigital transformed our online presence! Their web development expertise and stunning UI design brought our vision to life. Highly recommend!'
  },
  {
    image: '/random-8.jpg',
    name: 'Mark Williams',
    star: 4,
    comment: 'The mobile app they developed for us exceeded our expectations. The user interface is intuitive, and the performance is top-notch. Thank you for your hard work!'
  },
  {
    image: '/random2.jpg',
    name: 'Olukorede Tamilore',
    star: 5,
    comment: 'I can’t say enough good things about this team! They transformed our website and made it incredibly user-friendly. The attention to detail is impressive!'
  },
  {
    image: '/random-5.jpg',
    name: 'David Aina',
    star: 3,
    comment: 'Good service, but we faced a few delays during the development process. Overall, the final product was satisfactory, and the team was responsive.'
  },
  {
    image: '/random3.jpg',
    name: 'Jessica Lee',
    star: 5,
    comment: 'Absolutely thrilled with our new mobile app! The design is sleek, and it works flawlessly. The team was professional and attentive to our needs.'
  },
  {
    image: '/random1.jpg',
    name: 'Anna Patel',
    star: 4,
    comment: 'Tech Innovations did a great job revamping our website. It looks modern and is much easier to manage now. A solid choice for web development!'
  },
  {
    image: '/random-black-3.jpeg',
    name: 'Babatunde Alex',
    star: 4,
    comment: 'Their expertise in mobile app development is top-notch. They delivered on time and the app has received rave reviews from our customers!'
  },
]

export const submit = async (data: Record<string, any>) => {
  try {
    const res = await fetch('/api/email',
      {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post'
      });
    return await res.json() as { data: any, status: boolean, message: string }
  } catch (error: any) {
    return { status: false, message: error.message, data: null }
  }
}