<?php

    // need it for cyclic import safety
interface ProductInterface
{
    public function getSku();
    public function getName();
    public function getPrice();
    public function getType();
}
