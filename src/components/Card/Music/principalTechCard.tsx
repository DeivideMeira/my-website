import { useState, useEffect } from 'react';
import { getTechPosts } from '../../../lib/[slug]';
import MusicPostsContainer from '../../Container/musicPostsContainer';

export default function PrincipalMusicCard() {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
  
    useEffect(() => {
      getTechPosts().then((result) => {
        setFeaturedPosts(result);
        setDataLoaded(true);
      });
    }, []);
    
    return (
      <div className="mb-8">
        {dataLoaded && featuredPosts.map((post, index) => (
          <MusicPostsContainer key={index} post={post} />
        ))}
    </div>
    );
}

