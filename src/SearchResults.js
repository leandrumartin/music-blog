const SearchResults = ({ blogPosts, searchQuery }) => {
  let results = blogPosts.filter((blogPost) => {
    if (searchQuery) {
      return blogPost.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      return false;
    }
  });

  return (
    <div data-bs-theme="dark">
      <ul className="list-group">
        {results.length > 0
          ? results.map((blogPost) => (
              <li className="list-group-item">
                <a href={"#blog-" + blogPost.id}>{blogPost.title}</a>
              </li>
            ))
          : "No results found."}
      </ul>
    </div>
  );
};

export default SearchResults;
