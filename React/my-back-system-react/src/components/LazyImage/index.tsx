import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string; // loading图片
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className,
    placeholder,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (imgRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            console.log(`${alt}`);
                            setIsVisible(true);
                            observer.unobserve(imgRef.current as HTMLElement); // 图片加载后断开观察
                        }
                    });
                },
                {
                    rootMargin: '0px 0px 200px 0px', // 观察距离
                },
            );

            if (imgRef.current) {
                observer.observe(imgRef.current);
            }

            return () => {
                if (imgRef.current) {
                    observer.unobserve(imgRef.current);
                }
            };
        }
    }, [alt]);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : placeholder} // 使用占位符图像
            alt={alt}
            className={className}
        />
    );
};

export default LazyImage;
