import React from 'react';
import { Link } from 'react-router-dom';

const blogData = [
 
  {
    slug: 'Basanta-Chaudhary',
    title: 'वसन्त चौधरीको पहिलो आख्यान ‘देवयानी’ सार्वजनिक',
    description:
      'काठमाण्डाै – कवि वसन्त चौधरीको पहिलो आख्यान ‘देवयानी’ सार्वजनिक भएको छ । साङ्ग्रीला बुक्सद्वारा प्रकाशित देवयानीको ‘डिजिटल’ ललितपुरमा आयोजित एक समारोहबीच सार्वजनिक भएको हाे ।',
    image:
      'https://unncdn.prixacdn.net/media/albums/pic2_FFGbNbR6ZR.jpg.360x240_q75_crop-smart_upscale.jpg',
  },
  {
    slug: 'basanta-ritu',
    title: 'लक्ष्मीलोचना वैद्यको प्रकाशोन्मुख उपन्यास ‘ऋतु’ बाट एउटा अंश',
    description:
      'बनेपाबाट काठमाण्डाैका लागि निस्कने बसहरू यात्रुहरूले भरिएका थिए । अफिस आवरमा प्रायः यस्तै हुने गर्छ । मैले बसको अन्तिमतिर उभिएर यात्रा गर्ने निर्णय गरेँ । अगाडि बसेका २–३ जना मान्छेहरूलाई रिक्वेस्ट गरी आफू पछाडि गएँ । सूर्यविनायक पुगेपछि बसका अधिकांश सिटहरू खाली हुन्थे । यसले मलाई सिट खाली नभए पनि बसमा चढ्न ढाडस दिएको थियो । घडी हेरेँ । साढे ८ हुने सङ्केत घडीको सुइले दिँदै थियो । मन वेगले कुदेर अफिस पुगिसक्यो तर बस भने बनेपामै थियो ।',
    image:
      'https://unncdn.prixacdn.net/media/albums/pic2_Anj5L9glh6.jpeg.360x240_q75_crop-smart_upscale.jpg',
  },
];

function BlogList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Console Blog News</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {blogData.map((post) => (
          <div
            key={post.slug}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <img src={post.image} alt={post.title} className="mb-2 w-full" />
            <p>{post.description}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-500 underline mt-2 inline-block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
