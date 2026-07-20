"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";
import {H2, H3, P} from "@/components/design";

export function Markdown({content}: { content: string }) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                h2: ({children}) => <H2 className="mt-10 first:mt-0">{children}</H2>,
                h3: ({children}) => <H3 className="mt-8">{children}</H3>,
                p: ({children}) => <P className="mb-4 max-w-none">{children}</P>,
                ul: ({children}) => (
                    <ul className="list-disc list-inside space-y-1.5 text-gray-300 mb-4 pl-1">
                        {children}
                    </ul>
                ),
                li: ({children}) => <li className="leading-relaxed">{children}</li>,
                strong: ({children}) => (
                    <strong className="text-white font-semibold">{children}</strong>
                ),
                code({className, children, ref, ...props}) {
                    const match = /language-(\w+)/.exec(className || "");
                    const isInline = !match;

                    if (!isInline) {
                        return (
                            <div className="rounded-lg overflow-hidden my-4 border border-white/10">
                                <SyntaxHighlighter
                                    style={vscDarkPlus as any}
                                    language={match[1]}
                                    PreTag="div"
                                    customStyle={{
                                        margin: 0,
                                        padding: "1rem",
                                        background: "rgba(255,255,255,0.03)",
                                        fontSize: "0.9rem",
                                    }}
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            </div>
                        );
                    }
                    return (
                        <code
                            className="bg-white/10 text-teal-300 px-1.5 py-0.5 rounded text-sm"
                            {...props}
                        >
                            {children}
                        </code>
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
}