'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function StickyHeader() {

    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const label = segment.charAt(0) + segment.slice(1).replace(/-/g, " ");
        return { label, path };
    });

    return (
        <>

            <div className="sticky top-0 z-30 w-full">

                <div id="myheader" className="flex w-full">

                    <div className="flex-1">

                        <div className="breadcrumbs text-sm">

                            <ul>
                                <li>
                                    <a href="/">home</a>
                                </li>

                                {breadcrumbs.map((item, index) => (
                                    <li key={index}>
                                        {index === breadcrumbs.length - 1 ? (
                                            <span className='bc-active'>{item.label}</span>
                                        ) : (
                                            <Link href={item.path}>{item.label}</Link>
                                        )}
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                    <div className="flex-none text-sm pt-2">

                        {/* <a href="#">Sign in</a> */}

                        {/* <a class="framer-JFlzh framer-aU3hP framer-26mb0f framer-v-3y8mml framer-1xyivzk" data-border="true" style="--border-bottom-width: 1px; --border-color: var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(216, 231, 242, 0.07)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; backdrop-filter: blur(5px); background: linear-gradient(180deg, var(--token-eb09dbbf-ef85-4b7f-81a5-44e9b062efb7, rgb(4, 7, 13)) 0%, var(--token-5970a3c6-0f13-482e-8fb6-b8cb7d627b04, rgba(255, 255, 255, 0.07)) 100%); border-radius: 8px; box-shadow: rgba(0, 0, 0, 0.68) 0px -0.48175px 0.48175px -1.25px inset, rgba(0, 0, 0, 0.6) 0px -1.83083px 1.83083px -2.5px inset, rgba(0, 0, 0, 0.24) 0px -8px 8px -3.75px inset; opacity: 1; will-change: auto;" href="https://app.aivah.ai/" target="_blank" rel="noopener" data-framer-name="desktop icon right"><div class="framer-1t4k9dk-container" style="opacity:0.8"><!--$--><div style="display:contents"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255)); color: var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255)); flex-shrink: 0;"><g color="var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255))" weight="regular"><path d="M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z"></path></g></svg></div><!--/$--></div><div class="framer-1bph33e" data-framer-name="Label" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255)); --framer-paragraph-spacing: 0px; opacity: 0.8; transform: none; will-change: transform;" data-framer-component-type="RichTextContainer"><p class="framer-text framer-styles-preset-dmuy5d" data-styles-preset="LC6TE31cM" style="--framer-text-color:var(--extracted-r6o4lv, var(--token-a85af9cb-7834-4006-a277-2dd1295ae376, rgb(255, 255, 255)))">Login </p></div></a> */}

                        <button className="btn btn-xs btn-primary">Sign in</button>

                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dddddd" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3" /></svg> */}

                    </div>

                </div>

                <div id="mytoolbar" className="flex w-full">

                    <div className="flex-1">

                    </div>

                    <div className="flex-none text-sm">

                        <img src='mockup-buttons.jpg' width={180} />

                    </div>

                </div>

            </div>

        </>
    );

}