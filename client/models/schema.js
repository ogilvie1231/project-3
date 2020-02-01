const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const Schema = mongoose.Schema;

const ContentSchema = new Schema ({

    title: {
        type: String,
        required: true
    },
     link: {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }

});

const Content = mongoose.model("Comments", ContentSchema)

module.exports = Content