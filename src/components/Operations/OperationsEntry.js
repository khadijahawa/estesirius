// components/OperationsEntry.js
import React from 'react';
import Image from 'next/image';

const OperationsEntry = () => {
  const operations = [
    {
      id: 1,
      image: '/images/oper-01.jpg',
      title: 'Lorem Ipsum',
      description: 'Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit.',
      tag: 'PROMO'
    },
    {
      id: 2,
      image: '/images/oper-02.jpg',
      title: 'Dolor Sit',
      description: 'Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit.',
      tag: 'SALE'
    },
    {
      id: 3,
      image: '/images/oper-03.jpg',
      title: 'Amet Consect',
      description: 'Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit.',
      tag: 'NEW'
    },
    {
      id: 4,
      image: '/images/oper-04.jpg',
      title: 'Product Lity',
      description: 'Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit.',
      tag: 'NEW'
    },
    {
      id: 5,
      image: '/images/oper-05.jpg',
      title: 'Amet Consect',
      description: 'Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit.',
      tag: 'HOT'
    },
    {
      id: 6,
      image: '/images/oper-06.jpg',
      title: 'Dolor Sit',
      description: 'Mauris et tortor sit amet ex sagittis feugiat praesent rutrum, lorem ipsum dolor sit.',
      tag: 'PROMO'
    }
  ];

  const getTagClass = (tag) => {
    switch(tag) {
      case 'PROMO':
        return 'bg-teal-400 text-white';
      case 'SALE':
        return 'bg-teal-400 text-white';
      case 'NEW':
        return 'bg-teal-400 text-white';
      case 'HOT':
        return 'bg-teal-400 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Choose our Best<br/>Product Prices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {operations.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start gap-4">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-medium">{item.price}</span>
                    <span className={`text-xs px-3 py-1 ${getTagClass(item.tag)}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperationsEntry;