import fs from 'fs'; // file system
import path from 'path'; // file path manipulation
import matter from 'gray-matter';

/**
 * Simulates fetching data from server;
 * https://nextjs.org/learn/basics/data-fetching/blog-data
 * https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
 * getStaticProps can only be exported from a page. You can’t export it from non-page files.
 * One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.
 * If you need to fetch data at request time instead of at build time, you can try Server-side Rendering (TODO)
 */

// process is the current thread (NodeJS)
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // sleep
    // to use async "Please only return JSON serializable data types."
    //await sleep(500);

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}