const e=JSON.parse('{"key":"v-6f6f1925","path":"/zh/front-end/ES6/Promise.html","title":"Promise","lang":"zh-CN","frontmatter":{"title":"Promise","date":"2021-08-27T00:00:00.000Z","summary":"\u4EE5\u524D\u5728\u524D\u7AEF\u5F00\u53D1\u65F6\u4F1A\u6709\u4E00\u79CD\u60C5\u51B5\uFF1A\u4E00\u4E2A\u8BF7\u6C42\u9700\u8981\u4F9D\u8D56\u53E6\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5982\u6B64\u5FAA\u73AF\u5D4C\u5957\uFF0C\u5C31\u5F62\u6210\u4E86\u7F51\u7EDC\u8BF7\u6C42\u7684\u56DE\u8C03\u5730\u72F1\u3002 \u4E0A\u9762\u7684\u4EE3\u7801\u867D\u7136\u6709\u70B9\u5938\u5F20\uFF0C\u4F46\u662F\u786E\u5B9E\u53CD\u5E94\u4E86\u90A3\u4E2A\u65F6\u4EE3\u7684\u771F\u5B9E\u3002\u8FD9\u6837\u7684\u4EE3\u7801\u867D\u7136\u8BF4\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u4F1A\u51FA\u73B0\u95EE\u9898\uFF0C\u4F46\u662F\u4E00\u65E6\u51FA\u95EE\u9898\uFF0C\u6392\u67E5\u95EE\u9898\u7684\u96BE\u5EA6\u6BD4\u8F83\u9AD8\uFF0C\u4E0D\u597D\u5B9A\u4F4D\uFF0C\u800C\u4E14\u8FD9\u6837\u7684\u4EE3\u7801\u4E0D\u4EC5\u96BE\u770B\u8FD8\u4E0D\u5BB9\u6613\u7EF4\u62A4\uFF0C\u9700\u8981\u4F7F\u7528\u4E00\u79CD\u66F4\u52A0\u4F18\u96C5\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u8FD9\u79CD\u5F02\u6B65\u64CD\u4F5C\u3002 \u4EC0\u4E48\u662FPromise ES6\u4E2D\u4E00","head":[["meta",{"property":"og:url","content":"https://whiteChen233/whitechen233.github.io/zh/front-end/ES6/Promise.html"}],["meta",{"property":"og:site_name","content":"\u6E29\u6545\u800C\u77E5\u65B0~"}],["meta",{"property":"og:title","content":"Promise"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-30T13:10:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:published_time","content":"2021-08-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-30T13:10:46.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://whiteChen233/whitechen233.github.io/en/front-end/ES6/Promise.html"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4EC0\u4E48\u662FPromise","slug":"\u4EC0\u4E48\u662Fpromise","link":"#\u4EC0\u4E48\u662Fpromise","children":[]},{"level":2,"title":"Promise.prototype.then()","slug":"promise-prototype-then","link":"#promise-prototype-then","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]}]},{"level":2,"title":"Promise.prototype.catch()","slug":"promise-prototype-catch","link":"#promise-prototype-catch","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5-1","link":"#\u8BED\u6CD5-1","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570-1","link":"#\u53C2\u6570-1","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-1","link":"#\u8FD4\u56DE\u503C-1","children":[]}]},{"level":2,"title":"Promise.resolve()","slug":"promise-resolve","link":"#promise-resolve","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5-2","link":"#\u8BED\u6CD5-2","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570-2","link":"#\u53C2\u6570-2","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-2","link":"#\u8FD4\u56DE\u503C-2","children":[]}]},{"level":2,"title":"Promise.reject()","slug":"promise-reject","link":"#promise-reject","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5-3","link":"#\u8BED\u6CD5-3","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570-3","link":"#\u53C2\u6570-3","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-3","link":"#\u8FD4\u56DE\u503C-3","children":[]}]},{"level":2,"title":"Promise.all()","slug":"promise-all","link":"#promise-all","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5-4","link":"#\u8BED\u6CD5-4","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570-4","link":"#\u53C2\u6570-4","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-4","link":"#\u8FD4\u56DE\u503C-4","children":[]}]}],"git":{"createdTime":1664012965000,"updatedTime":1664543446000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":1},{"name":"white","email":"294487398@qq.com","commits":1}]},"readingTime":{"minutes":6.42,"words":1926},"filePathRelative":"zh/front-end/ES6/Promise.md","localizedDate":"2021\u5E748\u670827\u65E5"}');export{e as data};
