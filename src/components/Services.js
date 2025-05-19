import './Services.css';

const Services = () => {
  const serviceList = [
    {
      title: 'Web Development',
      description: 'Scalable, SEO-optimized, and modern websites tailored to your business.',
      price: 'Starting at $1000',
      image: '/images/pngtree-liquid-abstract-colorful-background-form-image_386556.jpg', // Replace with actual image path
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications designed for speed and usability.',
      price: 'Starting at $1500',
      image: '/images/pngtree-liquid-abstract-colorful-background-form-image_386556.jpg', // Replace with actual image path
    },
    {
      title: 'UI/UX Design',
      description: 'Clean, intuitive designs focusing on real user needs and experiences.',
      price: 'Starting at $800',
      image: '/images/pngtree-liquid-abstract-colorful-background-form-image_386556.jpg', // Replace with actual image path
    },
    {
      title: 'SEO Optimization',
      description: 'Boost your visibility with proven strategies and search engine tools.',
      price: 'Starting at $600',
      image: '/images/pngtree-liquid-abstract-colorful-background-form-image_386556.jpg', // Fixed the missing closing quote here
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
        We help you grow through custom tech solutions that meet your unique business needs.
      </p>
      <div className="services-grid">
        {serviceList.map((service, index) => (
          <div className="service-card" key={index}>
            
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-price">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
