import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://Rupesh:Rupesh123@youtube.cqksg.mongodb.net/chat-app")
				console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
