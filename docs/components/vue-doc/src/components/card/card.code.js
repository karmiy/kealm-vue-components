/* 基础卡片 */
export const CodeBasic =
    `    <template>
        <div>    
            <sl-card title="Card Title">
                <a href="#" slot="extra">more</a>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </sl-card>
        </div>
    </template>`

/* 卡片无边框 */
export const CodeBorder =
    `    <template>
        <div>    
            <sl-card style="width: 300px;" title="Card Title" :bordered="false">
                <a href="#" slot="extra">more</a>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </sl-card>
        </div>
    </template>`

/* 简洁卡片 */
export const CodeSimple =
    `    <template>
        <div>    
            <sl-card style="width: 300px;">
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </sl-card>
        </div>
    </template>`

/* 带图片的卡片 */
export const CodeImg =
    `    <template>
        <div>    
            <sl-card style="width: 300px">
                <img alt="example" src="../../assets/imgs/card-example.png" slot="cover"/>
                <sl-card-meta timeInfo="2018-08-08 18:00:00">
                    <template slot="description">description</template>
                    <a href="#" slot="metaExtra">more</a>
                </sl-card-meta>
            </sl-card>
        </div>
    </template>`

/* 带阴影的卡片 */
export const CodeShadow =
    `    <template>
        <div>    
            <sl-card style="width: 300px;" defaultShadow>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </sl-card>
            <sl-card style="width: 300px;" hoverable>
                <p>card content</p>
                <p>card content</p>
                <p>card content</p>
            </sl-card>
        </div>
    </template>`
