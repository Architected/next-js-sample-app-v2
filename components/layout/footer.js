import { architectedConfig } from '../../architectedConfig';
import Link from 'next/link';
const footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <Link href="/" passHref>
                  <a className="flex items-center py-10 px-2 text-sm text-gray-700 hover:text-gray-900">
                    <span>
                      {year} © {architectedConfig.siteName}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/terms" passHref>
                <a className="py-10 px-3 text-sm text-true-gray-800">
                  Terms and Conditions
                </a>
              </Link>
              <Link href="/privacy" passHref>
                <a className="py-10 px-3 text-sm text-true-gray-800">
                  Privacy Policy
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
