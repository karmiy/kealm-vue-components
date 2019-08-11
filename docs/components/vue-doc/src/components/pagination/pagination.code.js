/* 基础分页 */
export const CodeBasic =
    `    <template>
        <div>
            <sl-pagination v-model="current" :total="50"></sl-pagination>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    current: 2
                }
            }
        }
    </script>`;

/* 快速跳转 */
export const CodeJumper =
    `    <template>
        <div>
            <sl-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange"/>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    current: 2
                }
            },
            methods: {
                onChange(pageNumber) {
                    console.log('Page: ', pageNumber);
                }
            }
        }
    </script>`;

/* 改变显示条数 */
export const CodeShowSizeChange =
    `    <template>
        <div>
            <sl-pagination v-model="current" :total="50"></sl-pagination>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    current: 2
                }
            }
        }
    </script>`;

/* 显示总数 */
export const CodeShowTotal =
    `    <template>
        <div>
            <sl-pagination :total="85" :defaultCurrent="1"
                :showTotal="(total, range) => \`当前\${range[0]}-\${range[1]}条，共\${total}条\`"/>
        </div>
    </template>`;

/* 简单分页 */
export const CodeSimple =
    `    <template>
        <div>
            <sl-pagination simple :defaultCurrent="2" :total="50" />
        </div>
    </template>`;


