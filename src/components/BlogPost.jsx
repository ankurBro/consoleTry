import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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

function BlogPost() {
  const { slug } = useParams();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <h2 className="p-6 text-red-600">Post not found.</h2>;
  }

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(post.title);

  return (
    <div className="p-6">
      <Helmet>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={shareUrl} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="mb-4 w-full max-w-xl" />
      <p className="mb-6">{post.description}</p>

      <div className="flex flex-col gap-2">
        <button
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
              '_blank'
            )
          }
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Share on Facebook
        </button>

        <button
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
              '_blank'
            )
          }
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Share on Twitter
        </button>

        <button
          onClick={() =>
            window.open(
              `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
              '_blank'
            )
          }
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default BlogPost;
