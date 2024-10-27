import Head from 'next/head';

const servicesList = [
  {
    title: 'Service One',
    description: 'Description for service one. This service helps you with...',
  },
  {
    title: 'Service Two',
    description: 'Description for service two. This service offers...',
  },
  {
    title: 'Service Three',
    description: 'Description for service three. We provide...',
  },
];

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Explore our services." />
      </Head>
      

      <header className="bg-gray-800 text-white py-8">
        <h1 className="text-4xl text-center">Our Services</h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-stone-400 shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default Service;
