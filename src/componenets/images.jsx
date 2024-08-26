function Images({ src, alt }) {
  return (
    <div className="aspect-w-1 aspect-h-1">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );
}

export default Images;