import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../firebase';
import { getFirestore, collection, query, orderBy, startAfter, limit, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
import '../css/Blog.css';

const firestore = getFirestore();

type Post = {
    title: string;
    date: string;
    text: string;
    image: string;
};

type BlogPostProps = Post & {
    delay: number;
};

function formatDate(isoString: string): string {
    const date = new Date(isoString);
    return date.toLocaleDateString();
}

export const BlogPost = ({ title, date, text, image, delay }: BlogPostProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const postTitleURL = encodeURIComponent(title.replace(/ /g, '-'));

    return (
        <article className={`article ${isVisible ? 'visible' : 'hidden'}`}>
            <header className='header'>
                <Link to={`/blog/${postTitleURL}`} className='heading'>
                    <h2>{title}</h2>
                </Link>
                <h3 className="subheading">By Brandon Hann</h3>
                <time dateTime={date} className="date">{formatDate(date)}</time>
            </header>
            <div className="content">
                {image &&
                    <figure className="figure">
                        <img className="image" src={image} alt={title} />
                        <figcaption className="caption">{title}</figcaption>
                    </figure>}
                <p className="text">{text}</p>
            </div>
        </article>
    );
};

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | null>(null);
    const [hasMore, setHasMore] = useState(true);
    const [initialLoad, setInitialLoad] = useState(false);

    const fetchPosts = async (lastDoc: QueryDocumentSnapshot | null) => {
        const postsCollection = collection(firestore, 'posts');
        let postsQuery = query(postsCollection, orderBy('date', 'desc'), limit(5));

        if (lastDoc) {
            postsQuery = query(postsCollection, orderBy('date', 'desc'), startAfter(lastDoc), limit(5));
        }

        const postsSnapshot = await getDocs(postsQuery);
        const newPosts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Post) }));

        setPosts(prevPosts => [...prevPosts, ...newPosts]);
        setLastDoc(postsSnapshot.docs[postsSnapshot.docs.length - 1]);
        setHasMore(postsSnapshot.docs.length === 5);
        setInitialLoad(true);
    };

    useEffect(() => {
        fetchPosts(null);
    }, []);

    const delay = 200;

    return (
        <div>
            {posts.map((post, index) => (
                <BlogPost key={index} {...post} delay={delay} />
            ))}
            {initialLoad && hasMore && <button onClick={() => fetchPosts(lastDoc)}>Load More</button>}
        </div>
    );
};

export default Blog;