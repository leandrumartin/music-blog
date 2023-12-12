const Blogs = () => {
  return [
    {
      title: "Example Post 1",
      albumId: "6Sts4Yh7KsDFwq2yTWrGGV",
      synopsis: "The best jazz album I've heard so far.",
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            soluta dicta a quis laudantium earum, rerum, accusantium incidunt
            illo eligendi quos eos aliquam est sequi, ducimus commodi quas
            facilis excepturi!
          </p>
          <iframe
            // style="border-radius:12px"
            src="https://open.spotify.com/embed/album/6Sts4Yh7KsDFwq2yTWrGGV"
            width="50%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            neque quod voluptate, porro labore expedita beatae ipsum eaque aut?
            Rem quia, iusto nemo excepturi laudantium dignissimos debitis
            consequuntur neque non libero iure quidem facere architecto sint,
            deserunt, cum qui nisi nulla totam. Voluptatibus laborum pariatur
            cupiditate modi aspernatur at quisquam?
          </p>
        </div>
      ),
    },

    {
      title: "Example Post 2",
      albumId: "1XoE7ZirQ3gjxq8HIzTJU9",
      synopsis: "Fun all the way through!",
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            earum?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dignissimos vitae nihil quos sed facere culpa enim magni repellat?
            Doloremque!
          </p>
        </div>
      ),
    },
  ];
};

export default Blogs;
