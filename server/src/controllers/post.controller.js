export const getAll = (req, res) => {
    res.send("Get all posts");
}

export const getPostById = (req, res) => {
    res.send("Getting post by id")
}

export const create = (req, res) => {
    res.send("Create post");
}

export const update = (req, res) => {
    res.send("Update post");
}

export const deletePostById = (req, res) => {
    res.send("Delete post by id")
}