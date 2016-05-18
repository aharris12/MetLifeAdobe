module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        banner: '/*\n' +
        '** <%= pkg.name %> - v<%= pkg.version %>\n' +
        '** Packaged on <%= grunt.template.today("mm/dd/yyyy @HH:MM:ss") %> by <%= pkg.author.name %>\n' +
        '** Copyright (c)<%= grunt.template.today("yyyy") %> METLIFE\n' +
        '*/\n',

        concat: {

            css: {
                src: [
                    'dev/css/theme/bootstrap-metlife.css',
                    'dev/css/theme/icon-metlife.css',
                    'dev/css/theme/form-metlife.css',
                    'dev/css/theme/utility.css',
                    'dev/css/theme/layout.css',
                    'dev/css/theme/main.css',
                    'dev/css/theme/button.css',
                    'dev/css/theme/pagination.css',
                    'dev/css/component/global-header.css',
                    'dev/css/component/login-popout.css',
                    'dev/css/component/breadcrumb.css',
                    'dev/css/component/homepage-nav.css',
                    'dev/css/component/get-quote-find-office.css',
                    'dev/css/component/divider-scroll-to.css',
                    'dev/css/component/divider-snoopy.css',
                    'dev/css/component/carousel--hero.css',
                    'dev/css/component/carousel--tabs.css',
                    'dev/css/component/promo-card.css',
                    'dev/css/component/disclaimer.css',
                    'dev/css/component/media-contact.css',
                    'dev/css/component/subnavigation.css',
                    'dev/css/component/product-module.css',
                    'dev/css/component/article-list.css',
                    'dev/css/component/optional-image.css',
                    'dev/css/component/product-comparison-chart.css',
                    'dev/css/component/table-variations.css',
                    'dev/css/component/microsite-header.css',
                    'dev/css/component/microsite-page-footer.css',
                    'dev/css/component/product-tile.css',
                    'dev/css/component/article.css',
                    'dev/css/component/media-card.css',
                    'dev/css/component/office-search.css',
                    'dev/css/component/contextual-links.css',
                    'dev/css/component/cta-box.css',
                    'dev/css/component/content-header.css',
                    'dev/css/component/section-header.css',
                    'dev/css/component/contact.css',
                    'dev/css/component/form-card.css',
                    'dev/css/component/video-text.css',
                    'dev/css/component/accordion.css',
                    'dev/css/component/global-footer.css',
                    'dev/css/component/divider-load-more.css',
                    'dev/css/component/subnavigationwithgoback.css',
                    'dev/css/component/product-card.css',
                    'dev/css/component/quote-result-card.css',
                    'dev/css/component/contact-form.css',
                    'dev/css/component/privacy-policy-index.css',
                    'dev/css/component/privacy-policy-section.css',
                    'dev/css/component/search-results.css',
                    'dev/css/component/hp-contextual-links.css',
                    'dev/css/component/search-suggestions-box.css',
                    'dev/css/component/cta-quote-tool.css',
                    'dev/css/component/quote-tool.css',
                    'dev/css/component/view-all-rates.css',
                    'dev/css/component/cookie-banner.css',
                    'dev/css/component/carousel--blog.css',
                    'dev/css/component/article-list--blog.css',
                    'dev/css/component/sidebar--blog.css',
                    'dev/css/component/category--blog.css',
                    'dev/css/component/additional-content--blog.css',
                    'dev/css/component/title-post--blog.css',
                    'dev/css/component/post--blog.css',
                    'dev/css/component/post-social--blog.css',
                    'dev/css/component/campaign-footer.css',
                    'dev/css/component/campaign-header.css',
                    'dev/css/component/campaign-card.css',
                    'dev/css/component/oo_style.css',
                    'dev/css/component/feedback.css',
                    'dev/css/component/404.css',
                    'dev/css/component/email-unsub.css',
                    'dev/css/component/fax.css',
                    'dev/css/component/glossary.css',
                    'dev/css/component/life-insurance-quote.css',
                    'dev/css/component/options-small.css',
                    'dev/css/component/overlay.css',
                    'dev/css/component/sitemap.css',
                    'dev/css/component/share-chat.css',
                    'dev/css/component/visiondental-overlay.css',
                    'dev/css/component/toolkit-login.css',
                    'dev/css/component/toolkit-searchbox.css',
                    'dev/css/component/toolkit-page-title.css',
                    'dev/css/component/toolkit-contextual-links.css',
                    'dev/css/component/toolkit-idea-submit.css',
                    'dev/css/component/toolkit-column-layouts.css',
                    'dev/css/component/toolkit-download-farm.css',
                    'dev/css/component/toolkit-element-title.css',
                    'dev/css/component/toolkit-search-page.css',
                    'dev/css/component/toolkit-contentblock.css',
                    'dev/css/component/toolkit-divider.css',
                    'dev/css/theme/ie9select.css'

                ],
                dest: 'dist/css/metlife.css'
            },
            vendors: {
                src: [
                    'dev/js/_plugins/svg4everybody.ie8.js',
                    'dev/js/_lib/jquery-1.11.3.js',
                    'dev/js/_lib/bootstrap.js',
                    'dev/js/_plugins/lazyloadxt/jquery.lazyloadxt.js',
                    'dev/js/_plugins/lazyloadxt/jquery.lazyloadxt.srcset.js',
                    'dev/js/_plugins/lazyloadxt/jquery.lazyloadxt.autoload.js',
                    'dev/js/_plugins/touchswipe/jquery.touchSwipe.js',
                    'dev/js/_plugins/jquery.ddslick.js',
                    'dev/js/_plugins/typeahead.bundle.js',
                    'dev/js/_plugins/jquery.cookie.js',
                    'dev/js/_plugins/jquery.bootpag.min.js'
                ],
                dest: 'dist/js/vendors.js'
            },
            feedback: {
                src: [
                    'dev/js/_plugins/oo_engine.min.js',
                    'dev/js/_plugins/oo_conf.js'
                ],
                dest: 'dist/js/feedback.js'
            },
            components: {
                src: [
                    'dev/js/variable.js',
                    'dev/js/utility.js',
                    'dev/js/global-header.js',
                    'dev/js/global-footer.js',
                    'dev/js/homepage-nav.js',
                    'dev/js/carousel--hero.js',
                    'dev/js/carousel--tabs.js',
                    'dev/js/accordion.js',
                    'dev/js/cta-box.js',
                    'dev/js/get-quote-find-office.js',
                    'dev/js/svgxuse.js',
                    'dev/js/divider-load-more.js',
                    'dev/js/divider-scroll-to.js',
                    'dev/js/product-module.js',
                    'dev/js/subnavigation.js',
                    'dev/js/form.js',
                    'dev/js/aem_form.js',
                    'dev/js/table-variations.js',
                    'dev/js/login-overlay.js',
                    'dev/js/media-contact.js',
                    'dev/js/form-card.js',
                    'dev/js/microsite-header.js',
                    'dev/js/product-comparison-chart.js',
                    'dev/js/product-tile.js',
                    'dev/js/form-library.js',
                    'dev/js/subnavigationgoback.js',
                    'dev/js/privacy-policy.js',
                    'dev/js/quote-result-card.js',
                    'dev/js/quote-results.js',
                    'dev/js/suggestions.js',
                    'dev/js/xmlhttp.js',
                    'dev/js/search-box.js',
                    'dev/js/quote-tool.js',
                    'dev/js/result-pages.js',
                    'dev/js/view-all-rates.js',
                    'dev/js/markerwithlabel.js',
                    'dev/js/feedback.js',
                    'dev/js/cookie.js',
                    'dev/js/ServicesAPI.js',
                    'dev/js/campaign-header.js',
                    'dev/js/campaign-card.js',
                    'dev/js/glossary.js',
                    'dev/js/toqjshashtable.js',
                    'dev/js/blogpost.js',
                    'dev/js/overlay.js',
                    'dev/js/aemfixes.js',
                    'dev/js/toolkit-contextual-links.js',
                    'dev/js/toolkit-search-page.js',
                    'dev/js/toolkit-column.js',
                    'dev/js/toolkit-page-title-banner.js',
                    'dev/js/share-chat.js',
                    'dev/js/product-card.js'
                ],
                dest: 'dist/js/metlife.js'
            }
        }, //concat

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            target1: {
                files: {
                    'dist/js/vendors.min.js': 'dist/js/vendors.js'
                }
            },
            target2: {
                files: {
                    'dist/js/metlife.min.js': 'dist/js/metlife.js'
                }
            },
            target3: {
                files: {
                    'dist/js/feedback.min.js': 'dist/js/feedback.js'
                }
            }
        }, //uglify

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/metlife.min.css': [
                        'dev/css/theme/bootstrap-metlife.css',
                        'dev/css/theme/icon-metlife.css',
                        'dev/css/theme/form-metlife.css',
                        'dev/css/theme/utility.css',
                        'dev/css/theme/layout.css',
                        'dev/css/theme/main.css',
                        'dev/css/theme/button.css',
                        'dev/css/theme/pagination.css',
                        'dev/css/component/global-header.css',
                        'dev/css/component/login-popout.css',
                        'dev/css/component/breadcrumb.css',
                        'dev/css/component/homepage-nav.css',
                        'dev/css/component/get-quote-find-office.css',
                        'dev/css/component/divider-scroll-to.css',
                        'dev/css/component/divider-snoopy.css',
                        'dev/css/component/carousel--hero.css',
                        'dev/css/component/carousel--tabs.css',
                        'dev/css/component/promo-card.css',
                        'dev/css/component/disclaimer.css',
                        'dev/css/component/media-contact.css',
                        'dev/css/component/subnavigation.css',
                        'dev/css/component/product-module.css',
                        'dev/css/component/article-list.css',
                        'dev/css/component/optional-image.css',
                        'dev/css/component/product-comparison-chart.css',
                        'dev/css/component/table-variations.css',
                        'dev/css/component/microsite-header.css',
                        'dev/css/component/microsite-page-footer.css',
                        'dev/css/component/product-tile.css',
                        'dev/css/component/article.css',
                        'dev/css/component/media-card.css',
                        'dev/css/component/office-search.css',
                        'dev/css/component/contextual-links.css',
                        'dev/css/component/cta-box.css',
                        'dev/css/component/content-header.css',
                        'dev/css/component/section-header.css',
                        'dev/css/component/contact.css',
                        'dev/css/component/form-card.css',
                        'dev/css/component/video-text.css',
                        'dev/css/component/accordion.css',
                        'dev/css/component/global-footer.css',
                        'dev/css/component/divider-load-more.css',
                        'dev/css/component/subnavigationwithgoback.css',
                        'dev/css/component/product-card.css',
                        'dev/css/component/quote-result-card.css',
                        'dev/css/component/contact-form.css',
                        'dev/css/component/privacy-policy-index.css',
                        'dev/css/component/privacy-policy-section.css',
                        'dev/css/component/search-results.css',
                        'dev/css/component/hp-contextual-links.css',
                        'dev/css/component/search-suggestions-box.css',
                        'dev/css/component/cta-quote-tool.css',
                        'dev/css/component/quote-tool.css',
                        'dev/css/component/view-all-rates.css',
                        'dev/css/component/cookie-banner.css',
                        'dev/css/component/carousel--blog.css',
                        'dev/css/component/article-list--blog.css',
                        'dev/css/component/sidebar--blog.css',
                        'dev/css/component/category--blog.css',
                        'dev/css/component/additional-content--blog.css',
                        'dev/css/component/title-post--blog.css',
                        'dev/css/component/post--blog.css',
                        'dev/css/component/post-social--blog.css',
                        'dev/css/component/campaign-footer.css',
                        'dev/css/component/campaign-header.css',
                        'dev/css/component/campaign-card.css',
                        'dev/css/component/oo_style.css',
                        'dev/css/component/feedback.css',
                        'dev/css/component/404.css',
                        'dev/css/component/email-unsub.css',
                        'dev/css/component/fax.css',
                        'dev/css/component/glossary.css',
                        'dev/css/component/life-insurance-quote.css',
                        'dev/css/component/options-small.css',
                        'dev/css/component/overlay.css',
                        'dev/css/component/sitemap.css',
                        'dev/css/component/share-chat.css',
                        'dev/css/component/visiondental-overlay.css',
                        'dev/css/component/toolkit-login.css',
                        'dev/css/component/toolkit-searchbox.css',
                        'dev/css/component/toolkit-page-title.css',
                        'dev/css/component/toolkit-contextual-links.css',
                        'dev/css/component/toolkit-idea-submit.css',
                        'dev/css/component/toolkit-column-layouts.css',
                        'dev/css/component/toolkit-download-farm.css',
                        'dev/css/component/toolkit-element-title.css',
                        'dev/css/component/toolkit-search-page.css',
                        'dev/css/component/toolkit-contentblock.css',
                        'dev/css/component/toolkit-divider.css',
                        'dev/css/theme/ie9select.css'


                    ]
                }
            }
        }, //cssmin

        css_import: {
            your_target: {
                options: {

                },
                files: {
                    'dist/css/metlife.min.css': ['dev/css/import.css']
                }
            }
        },

        cssjoin: {
            production : {
                options: {
                    // Task-specific options go here.
                },
                your_target: {
                    'dist/css/metlife.min.css': ['dev/css/import.css']
                },
            }
        },


        copy: {
            main: {
                files: [
                    // copy Find an Office JS files
                    //{expand: true, cwd: 'dev/js/', src: ['fao.js'], dest: 'dist/js'},
                    //{expand: true, cwd: 'dev/js/', src: ['markerwithlabel.js'], dest: 'dist/js'},

                    // copy SVG and FAVICON files
                    {expand: true, cwd: 'dev/images/', src: ['*.{svg,ico}'], dest: 'dist/images/', filter: 'isFile'},
                    // copy FONTS files
                    {expand: true, cwd: 'dev/fonts/', src: ['**'], dest: 'dist/fonts/'},
                    // copy Original JS files
                    {expand: true, cwd: 'dev/js/', src: ['**'], dest: 'dist/dev/js'},
                    // copy Original CSS files
                    {expand: true, cwd: 'dev/css/', src: ['**'], dest: 'dist/dev/css'},
                ],
            },
        },

        processhtml: {
            dist:{
                options: {
                    process: true,
                    data: {
                        message: '<!-- Packaged on <%= grunt.template.today("mm/dd/yyyy @HH:MM:ss") %> by <%= pkg.author.name %> --><meta name="format-detection" content="telephone=no">'
                    },
                },
                files: [
                    {
                        expand: true,
                        cwd: './dev/',
                        src: ['*.html'],
                        dest: 'dist/',
                        ext: '.html'
                    },
                ],
            }
        }, //processhtml

        compress: {
            main: {
                options: {
                    archive: 'Adobe-' + grunt.template.today("mmddyy-HHMMss") + '.zip'
                },
                files: [
                    {expand: true, cwd: 'dist/', src: ['**'], dest: 'AEM-'+ grunt.template.today("mmddyy-HHMMss")}, // makes all src relative to cwd
                ]
            }
        } //compress

    }); //initConfig

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-css-import');
    grunt.loadNpmTasks('grunt-cssjoin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin','processhtml','copy','compress']);

}; //wrapper function

