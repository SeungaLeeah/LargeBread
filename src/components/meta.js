import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

const meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset='utf-8' />
                <title>{props.title}</title>

                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta name="subject" content={props.subject} />
                <meta name="content-language" content="ko" />

                <meta property="og:url" content={props.url} />
                <meta property="og:title" content={props.title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={props.description} />
                {/* <meta property="og:image" content={props.image} /> */}
                
                {/* <link rel="icon" href="데스크탑 favicon" type="image/png" />
                <link rel="shortcut icon" href="안드로이드용 favicon" type="image/png" />
                <link rel="apple-touch-icon" href="아이폰용 favicon" type="image/png" /> */}
            </Helmet>
        </HelmetProvider>
    );
};

meta.defaultProps = {
    title: 'Large Bread',
    description: '디저트 키오스크 입니다.',
    keywords: 'React',
    author: '한주애, 이승아',
    subject: '포트폴리오로 제작한 디저트 키오스크 입니다.',
    url: window.location.href
};

export default meta;