var prog_guides =
[
    [ "Blobstore Programmer's Guide", "blob.html", [
      [ "In this document", "blob.html#blob_pg_toc", null ],
      [ "Target Audience", "blob.html#blob_pg_audience", null ],
      [ "Introduction", "blob.html#blob_pg_intro", null ],
      [ "Theory of Operation", "blob.html#blob_pg_theory", [
        [ "Abstractions", "blob.html#autotoc_md569", null ],
        [ "Atomicity", "blob.html#autotoc_md574", null ],
        [ "Callbacks", "blob.html#autotoc_md576", null ],
        [ "Backend Support", "blob.html#autotoc_md579", null ],
        [ "Metadata Operations", "blob.html#autotoc_md582", null ],
        [ "Threads", "blob.html#autotoc_md585", null ],
        [ "Channels", "blob.html#autotoc_md586", null ],
        [ "Blob Identifiers", "blob.html#autotoc_md588", null ]
      ] ],
      [ "Design Considerations", "blob.html#blob_pg_design", [
        [ "Initialization Options", "blob.html#autotoc_md591", null ],
        [ "Sub-page Sized Operations", "blob.html#autotoc_md596", null ],
        [ "Threads", "blob.html#autotoc_md598", null ],
        [ "Data Buffer Memory", "blob.html#autotoc_md601", null ],
        [ "Error Handling", "blob.html#autotoc_md602", null ],
        [ "Asynchronous API", "blob.html#autotoc_md604", null ],
        [ "Xattrs", "blob.html#autotoc_md605", null ],
        [ "Synchronizing Metadata", "blob.html#autotoc_md607", null ],
        [ "Iterating Blobs", "blob.html#autotoc_md609", null ],
        [ "The Super Blob", "blob.html#autotoc_md611", null ]
      ] ],
      [ "Examples", "blob.html#blob_pg_examples", null ],
      [ "Configuration", "blob.html#blob_pg_config", null ],
      [ "Component Detail", "blob.html#blob_pg_component", [
        [ "Media Format", "blob.html#autotoc_md617", null ],
        [ "Blob cluster layout", "blob.html#blob_pg_cluster_layout", null ],
        [ "Thin Blobs, Snapshots, and Clones", "blob.html#autotoc_md622", [
          [ "Thin Provisioning", "blob.html#blob_pg_thin_provisioning", null ],
          [ "Snapshots and Clones", "blob.html#blob_pg_snapshots", null ],
          [ "Inflating and Decoupling Clones", "blob.html#autotoc_md640", null ],
          [ "External Snapshots and Esnap Clones", "blob.html#blob_pg_esnap_and_esnap_clone", null ],
          [ "Shallow Copy", "blob.html#blob_shallow_copy", null ],
          [ "Change the parent of a blob", "blob.html#blob_reparent", null ],
          [ "Copy-on-write", "blob.html#blob_pg_copy_on_write", null ]
        ] ],
        [ "Sequences and Batches", "blob.html#autotoc_md648", null ],
        [ "Key Internal Structures", "blob.html#autotoc_md652", null ],
        [ "Code Layout and Common Conventions", "blob.html#autotoc_md657", null ]
      ] ]
    ] ],
    [ "Block Device Layer Programming Guide", "bdev_pg.html", [
      [ "Target Audience", "bdev_pg.html#autotoc_md257", null ],
      [ "Introduction", "bdev_pg.html#autotoc_md258", null ],
      [ "Basic Primitives", "bdev_pg.html#autotoc_md259", null ],
      [ "Initializing The Library", "bdev_pg.html#autotoc_md260", null ],
      [ "Discovering Block Devices", "bdev_pg.html#autotoc_md261", null ],
      [ "Preparing To Use A Block Device", "bdev_pg.html#autotoc_md263", null ],
      [ "Sending I/O", "bdev_pg.html#autotoc_md265", null ],
      [ "Resetting A Block Device", "bdev_pg.html#autotoc_md268", null ]
    ] ],
    [ "Writing a Custom Block Device Module", "bdev_module.html", [
      [ "Target Audience", "bdev_module.html#autotoc_md236", null ],
      [ "Introduction", "bdev_module.html#autotoc_md239", null ],
      [ "Creating A New Module", "bdev_module.html#autotoc_md240", null ],
      [ "Creating Bdevs", "bdev_module.html#autotoc_md241", null ],
      [ "Creating Bdevs in an External Repository", "bdev_module.html#autotoc_md242", null ],
      [ "Creating Virtual Bdevs", "bdev_module.html#autotoc_md243", null ]
    ] ],
    [ "NVMe over Fabrics Target Programming Guide", "nvmf_tgt_pg.html", [
      [ "Target Audience", "nvmf_tgt_pg.html#autotoc_md495", null ],
      [ "Introduction", "nvmf_tgt_pg.html#autotoc_md496", null ],
      [ "Primitives", "nvmf_tgt_pg.html#autotoc_md497", null ],
      [ "The Basics", "nvmf_tgt_pg.html#autotoc_md500", null ],
      [ "Access Control", "nvmf_tgt_pg.html#autotoc_md503", null ],
      [ "Discovery Subsystems", "nvmf_tgt_pg.html#autotoc_md505", null ],
      [ "Transports", "nvmf_tgt_pg.html#autotoc_md506", null ],
      [ "Choosing a Threading Model", "nvmf_tgt_pg.html#autotoc_md509", null ],
      [ "Scaling Across CPU Cores", "nvmf_tgt_pg.html#autotoc_md510", null ],
      [ "Zero Copy Support", "nvmf_tgt_pg.html#autotoc_md513", null ],
      [ "RDMA", "nvmf_tgt_pg.html#autotoc_md515", null ]
    ] ],
    [ "Flash Translation Layer", "ftl.html", [
      [ "Terminology", "ftl.html#ftl_terminology", [
        [ "Logical to physical address map", "ftl.html#ftl_l2p", null ],
        [ "Band", "ftl.html#ftl_band", null ],
        [ "Non volatile cache", "ftl.html#ftl_nvcache", null ],
        [ "Garbage collection and relocation", "ftl.html#ftl_reloc", null ]
      ] ],
      [ "Metadata", "ftl.html#ftl_metadata", null ],
      [ "Dirty shutdown recovery", "ftl.html#ftl_dirty_shutdown", [
        [ "Shared memory recovery", "ftl.html#ftl_shm_recovery", null ],
        [ "Trim", "ftl.html#ftl_trim", null ]
      ] ],
      [ "Usage", "ftl.html#ftl_usage", [
        [ "Prerequisites", "ftl.html#ftl_prereq", null ],
        [ "FTL bdev creation", "ftl.html#ftl_create", null ]
      ] ],
      [ "FTL bdev stack", "ftl.html#ftl_bdev_stack", null ]
    ] ],
    [ "GDB Macros User Guide", "gdb_macros.html", [
      [ "Introduction", "gdb_macros.html#autotoc_md522", null ],
      [ "Loading The gdb Macros", "gdb_macros.html#autotoc_md523", null ],
      [ "Using the gdb Data Directory", "gdb_macros.html#autotoc_md524", null ],
      [ "Using .gdbinit To Load The Macros", "gdb_macros.html#autotoc_md525", null ],
      [ "Why Do We Need to Explicitly Call spdk_load_macros", "gdb_macros.html#autotoc_md526", null ],
      [ "Macros available", "gdb_macros.html#autotoc_md527", null ],
      [ "Adding New Macros", "gdb_macros.html#autotoc_md528", null ]
    ] ],
    [ "Notify library", "notify.html", [
      [ "Register event types", "notify.html#notify_register", null ],
      [ "Get info about events", "notify.html#notify_get_info", null ],
      [ "Get new events", "notify.html#notify_listen", null ],
      [ "Send events", "notify.html#notify_send", null ],
      [ "RPC Calls", "notify.html#rpc_calls", null ]
    ] ]
];