import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  // State to store the file preview URL
  const [previewUrl, setPreviewUrl] = useState('');

  // Fetch the file preview URL asynchronously
  useEffect(() => {
    async function fetchPreview() {
      try {
        const preview = await appwriteService.getFilePreview(featuredImage);
        setPreviewUrl(preview.href); // Set the resolved preview URL
      } catch (error) {
        console.error('Error fetching file preview:', error);
      }
    }

    // Call the function to fetch the preview
    if (featuredImage) {
      fetchPreview();
    }
  }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {/* Conditionally render the image only if the preview URL is available */}
          {previewUrl && (
            <img src={previewUrl} alt={title} className="rounded-xl" />
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
