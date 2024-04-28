import $ from 'jquery';

export default function () {
    const $src = $('.card');
    let $originalImage;
    let $hoverImage;

    function replaceImageWithHover() {
        $originalImage = $(this).find('.card-image').attr('data-src');
        $hoverImage = $(this).find('.card-image').attr('data-hover');
        if ($hoverImage !== null) {
            $(this).find('.card-image').attr('src', $hoverImage);
        }
    }

    function replaceImageWithOriginal() {
        $(this).find('.card-image').attr('src', $originalImage);
    }

    $src.on('mouseover', replaceImageWithHover);
    $src.on('mouseout', replaceImageWithOriginal);
}
