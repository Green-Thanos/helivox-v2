import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to Our Newsletter
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Stay up to date with our latest news and promotions
      </p>
      <form className="flex items-center space-x-2">
        <div className="flex-1">
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full"
          />
        </div>
        <Button className="ml-2">Sign Up</Button>
      </form>
    </div>
  );
}
