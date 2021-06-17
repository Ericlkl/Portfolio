import Head from 'next/head';

// Configs data
import { defaultPageHeadConfig } from 'config/components/pagehead';
// Interfaces
import { PageHeadProps } from 'interfaces/components/common/pageHead.interface';

const PageHead: React.FC<PageHeadProps> = ({ 
    title, showDefaultTitle = true, metaTags = [], linkTags = [], children }) => {
    const { 
        title: defaultTitle, 
        linkTags: defaultLinkTags = [],
        metaTags: defaultMetaTags = [] 
    } = defaultPageHeadConfig;

    const pageTitle = showDefaultTitle ? defaultTitle + ' ' + title : title;
    const LinkTags = [...linkTags, ...defaultLinkTags].map(({href, rel, dataReactHelmet}) => {
        return <link key={href} href={href} rel={rel} data-react-helmet={String(dataReactHelmet)}/>
    })
    const MetaTags = [...metaTags, ...defaultMetaTags].map(
        ({ name, content, property, dataReactHelmet }) => {
        return <meta key={name || property}
                     name={name} 
                     content={content}
                     property={property}
                     data-react-helmet={String(dataReactHelmet)}></meta>
    })

    return <Head>
        <title>{pageTitle}</title>
        {LinkTags}
        {MetaTags}
        {children}
    </Head>
}

export default PageHead;
