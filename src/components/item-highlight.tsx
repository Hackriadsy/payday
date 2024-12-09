import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";

type ItemHighlightAsyncProps = {
  endpoint: string;
  headers?: Record<string, string>;
  errorText?: string;
};

type ItemHighlightStaticProps = {
  title: string;
  thumbnail?: string;
  description: string;
  link?: {
    url: string;
    text: string;
  };
  metadata?: Record<string, string>;
};

export type ItemHighlightProps = (
  | ItemHighlightAsyncProps
  | Omit<ItemHighlightStaticProps, "metadata">
) & {
  metadata?: (metadata: Record<string, string>) => React.ReactNode;
};

export default function ItemHighlight(props: ItemHighlightProps) {
  const [item, setItem] = useState<ItemHighlightStaticProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("props", props);
    if ("endpoint" in props) {
      setIsLoading(true);
      axios
        .get(props.endpoint, {
          headers: props.headers,
        })
        .then(({ data }) => {
          console.log("data", data);
          setItem({
            title: data.title,
            thumbnail: data.thumbnail,
            description: data.description,
            link: data.link,
            metadata: data.metadata,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { metadata, ...rest } = props;
      setItem(rest);
    }
  }, [props]);

  return (
    <div
      className={clsx("card card-bordered border-slate-200 bg-white image-full h-64 w-full p-3", {
        "flex items-center justify-center": !item,
      })}
    >
      {item ? (
        <>
          <figure>
            <img src={item.thumbnail} alt={item.title} />
          </figure>
          <div className="justify-between card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            {item.link && (
              <a href={item.link.url} className="btn btn-primary">
                {item.link.text}
              </a>
            )}
            {item.metadata && props.metadata && props.metadata(item.metadata)}
          </div>
        </>
      ) : isLoading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <p className="text-slate-400 text-lg text-center">
            {'errorText' in props ? props.errorText : "There was an error fetching the data."}
        </p>
      )}
    </div>
  );
}
