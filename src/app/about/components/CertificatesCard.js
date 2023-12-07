'use client';
import useHasMounted from "@/app/commons/components/hooks/useHasMounted";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CertificatesCard({
  title,
  image,
  description,
  diberikan,
  berlaku,
  id_certificate,
  slug,
  Index,
}) {
  const mounted = useHasMounted();

  if (!mounted) return null;
  return (
    <>
      <Link href={`/about/${slug}`}>
        <div
          key={Index}
          className="rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md flex items-center sm:justify-start justify-center  sm:gap-5 gap-0 py-4 px-6 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800 sm:flex-row flex-col h-full overflow-hidden"
        >
          <div className="flex items-center gap-4 sm:flex-row flex-col justify-center">
            <motion.div
              initial={{ filter: "blur(20px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image
                src={image}
                width={1000}
                height={1000}
                alt={title}
                className="rounded-xl sm:w-32   h-fit brightness-100 dark:brightness-90"
              />
            </motion.div>

            <div className="flex flex-col items-start sm:justify-start justify-center sm:text-start ">
              <h1 className="text-lg font-medium sm:w-64 w-72 sm:line-clamp-none line-clamp-1 sm:mx-0 mx-auto">
                {title}
              </h1>
              <p className="text-sm sm:w-64 w-60 line-clamp-2 sm:mx-0 mx-auto">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
