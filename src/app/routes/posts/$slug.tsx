import { useParams } from "react-router-dom";

export default function PostPage() {
  const { slug } = useParams();
  return <div>Post detail page for: {slug}</div>;
}
