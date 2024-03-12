import Post from "@/components/Post";
import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import { onDeletePost } from "./_actions/actions";

export default async function Home() {
  const { data: posts } = await cookieBasedClient.models.Post.list({
    selectionSet: ["title", "id"],
    authMode: "apiKey",
  });

  console.log("posts", posts);

  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
      <h1 className="text-2xl pb-10">List Of Wasabito</h1>
      {posts?.map(async (post, idx) => (
        <Post
          onDelete={onDeletePost}
          post={post}
          key={idx}
          isSignedIn={await isAuthenticated()}
        />
      ))}
    </main>
  );
}

//Remeber **** apiKeyAuthorizationMode: {
//  expiresInDays: 30, the key expires amplify/data/resources
//Steps
//1. Set up app the app and install the dependencies
// npm i aws-amplify @aws-amplify/ui-react @aws-amplify/adapter-nextjs
// npm create amplify@latest
//2. Set up npm amplify sandbox
//AMplify sandbox will deploy the backend
//3. Set up all routers and folders
//4. Set up NAV
//5. List Titles
//6. Add titles
//7. Delete titles
//8. Show titles in route
//9. Show comments
//10. Add cpmments
//11. Delete Comments
//12. Cleanup