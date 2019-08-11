/* 基础用法 */
export const CodeBasic = 
`    import { Component } from '@angular/core';

    @Component({
    selector: 'salus-demo-anchor-basic',
    template: \`
        <ns-anchor>
            <ns-link href="#components-anchor-demo-basic" title="Basic demo"></ns-link>
            <ns-link href="#components-anchor-demo-static" title="Static demo"></ns-link>
            <ns-link href="#components-anchor-demo-horizontal" title="Horizontal demo"></ns-link>
            <ns-link href="#api" title="API">
                <ns-link href="#ns-anchor" title="ns-anchor"></ns-link>
                <ns-link href="#ns-link" title="ns-link"></ns-link>
            </ns-link>
        </ns-anchor>
    \`
    })
    export class SalusDemoAnchorBasicComponent { }`;

/* 静态位置 */
export const CodeStatic = 
`    import { Component } from '@angular/core';

    @Component({
    selector: 'salus-demo-anchor-static',
    template: \`
        <ns-anchor [affix]="false">
            <ns-link href="#components-anchor-demo-basic" title="Basic demo"></ns-link>
            <ns-link href="#components-anchor-demo-static" title="Static demo"></ns-link>
            <ns-link href="#components-anchor-demo-horizontal" title="Horizontal demo"></ns-link>
            <ns-link href="#api" title="API">
                <ns-link href="#ns-anchor" title="ns-anchor"></ns-link>
                <ns-link href="#ns-link" title="ns-link"></ns-link>
            </ns-link>
        </ns-anchor>
    \`
    })
    export class SalusDemoAnchorStaticComponent { }`;


/* 横向位置 */
export const CodeHorizontal = 
`    import { Component } from '@angular/core';

    @Component({
    selector: 'salus-demo-anchor-horizontal',
    template: \`
        <ns-anchor [affix]="false" horizontal>
            <ns-link href="#components-anchor-demo-basic" title="Basic demo"></ns-link>
            <ns-link href="#components-anchor-demo-static" title="Static demo"></ns-link>
            <ns-link href="#components-anchor-demo-horizontal" title="Horizontal demo"></ns-link>
            <ns-link href="#api" title="API"></ns-link>
        </ns-anchor>
    \`
    })
    export class SalusDemoAnchorHorizontalComponent { }`;