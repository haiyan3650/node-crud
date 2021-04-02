module.exports = mongoose => {
    const Note = mongoose.model(
        "note",
        mongoose.Schema(
        {
            title: String,
            content: String,
            color: String,
            paper: String,
            published: Boolean
        },
        { timestamps: true }
        )
    );

    return Note;
};