const SearchResults = ({ blogPosts, searchQuery }) => {
  let results = blogPosts.filter((blogPost) => {
    if (searchQuery) {
      return blogPost.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      return false;
    }
  });

  return (
    <div>
      <ul className="list-group">
        {results.length > 0
          ? results.map((blogPost) => (
              <li className="list-group-item">{blogPost.title}</li>
            ))
          : "No results found."}
      </ul>
    </div>
  );
};

export default SearchResults;
