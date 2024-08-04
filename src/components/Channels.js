import Image from 'next/image';

export default function ChannelsWeServe() {
  const channels = [
    {
      title: 'Web',
      description: 'Enhance your business visibility and customer engagement with expert web development and design services.',
      imageUrl: '/images/web.webp',
    },
    {
      title: 'Social Media',
      description: 'Maximize your social media impact with tailored content creation and management strategies.',
      imageUrl: '/images/socialmedia.webp',
    },
    {
      title: 'Mobile',
      description: 'Develop intuitive mobile apps and responsive websites to connect with customers on the go.',
      imageUrl: '/images/mobile.webp',
    },
    {
      title: 'VR and AR',
      description: 'Create captivating experiences with advanced VR and AR solutions.',
      imageUrl: '/images/xr.webp',
    },
    {
      title: 'Email Marketing',
      description: 'Engage your audience through personalized and effective email marketing campaigns.',
      imageUrl: '/images/email.webp',
    },
    {
      title: 'IRL',
      description: 'Leverage real-world interactions and events to create lasting impressions and connections.',
      imageUrl: '/images/irl.webp',
    },
  ];

  return (
    <div className="md:container mx-auto px-4 py-5">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Your Customers Anywhere</h2>
      <p className="text-lg text-gray-700 text-center mb-8">
        Our tailored solutions help you reach and connect with your customers across multiple channels, ensuring impactful and lasting engagement.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {channels.map((channel, index) => (
          <div
            key={index}
            className={`bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row ${
              index % 4 === 0 || index % 4 === 1 ? '' : 'md:flex-row-reverse'
            } items-center`}
          >
            <Image
              src={channel.imageUrl}
              alt={channel.title}
              width={600}
              height={400}
              className="object-cover rounded-t-lg mb-2 md:mb-0 md:w-1/2"
            />
            <div className="md:w-1/2 md:px-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-1">{channel.title}</h3>
              <p className="text-gray-700 text-sm">{channel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
